"""
ZURAHA Luxury Stays - Python Database Initializer & CLI Explorer

Zero external dependencies - uses standard library `sqlite3`.
Can initialize, re-seed, or query `zuraha.db`.
"""

import os
import sqlite3
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "zuraha.db")
SQL_PATH = os.path.join(BASE_DIR, "zuraha.sql")


def init_database():
    """Initializes and seeds the database directly from zuraha.sql"""
    print("=" * 55)
    print("  ZURAHA LUXURY STAYS - PYTHON DATABASE INITIALIZER  ")
    print("=" * 55)
    print(f"Database Path: {DB_PATH}")
    print(f"SQL Seed File: {SQL_PATH}")

    if not os.path.exists(SQL_PATH):
        print(f"Error: Seed file not found at {SQL_PATH}")
        sys.exit(1)

    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
        print("✓ Removed existing zuraha.db")

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    with open(SQL_PATH, "r", encoding="utf-8") as f:
        sql_content = f.read()

    # Execute all statements up to SAMPLE QUERIES
    seed_sql = sql_content.split("-- SAMPLE QUERIES FOR ZURAHA")[0]
    cursor.executescript(seed_sql)
    conn.commit()

    # Verification
    cursor.execute("SELECT COUNT(*) FROM hotels")
    total_hotels = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM bookings")
    total_bookings = cursor.fetchone()[0]

    cursor.execute(
        "SELECT stay_type, COUNT(*), ROUND(AVG(nightly_price), 2) "
        "FROM hotels GROUP BY stay_type ORDER BY stay_type"
    )
    breakdown = cursor.fetchall()

    cursor.execute("SELECT MIN(nightly_price), ROUND(AVG(nightly_price), 2), MAX(nightly_price) FROM hotels")
    min_p, avg_p, max_p = cursor.fetchone()

    print("\n--- INITIALIZATION REPORT ---")
    print(f"✓ Hotels Populated:  {total_hotels}")
    print(f"✓ Bookings Seeded:   {total_bookings}")
    print(f"✓ Price Range:       ${min_p} - ${max_p} (Average: ${avg_p})")
    print("\nBreakdown by Type:")
    for stay_type, count, avg_price in breakdown:
        print(f"  • {stay_type:<10}: {count:>3} stays (avg ${avg_price:>7.2f}/night)")

    conn.close()
    print("\n✓ Local database successfully ready!")


def query_summary():
    """Prints a quick summary of the current database"""
    if not os.path.exists(DB_PATH):
        print("Database does not exist. Running initialization first...")
        init_database()
        return

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) as count FROM hotels")
    print(f"\nHotels in database: {cursor.fetchone()['count']}")

    print("\nSample Properties (Harare & Bali):")
    cursor.execute(
        "SELECT id, name, destination, stay_type, nightly_price, rating "
        "FROM hotels WHERE destination IN ('Harare', 'Bali') ORDER BY destination, nightly_price"
    )
    for row in cursor.fetchall():
        print(f"  [{row['id']:>2}] {row['name']:<30} | {row['destination']:<8} | {row['stay_type']:<7} | ${row['nightly_price']:>6.2f} | ★{row['rating']}")

    conn.close()


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--summary":
        query_summary()
    else:
        init_database()
