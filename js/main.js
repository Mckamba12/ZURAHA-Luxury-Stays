const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const destinationInput = document.getElementById("destination");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const stayTabs = document.querySelectorAll(".stay-tab");

let selectedStayType = "Hotels";

document.getElementById("currentYear").textContent = new Date().getFullTear();

function getLocalDateString(date = new Date())
    {
        const year = date.getFullYear();
        const month = string(date.getMonth() + 1).padStart(2, "0");
        const day = string(date.getDate() +1).padStart(2, "0");

        return '${year}-${month}-${day}';
    }

const today = getLocalDateString();

checkinInput.min = today;
checkoutInput.min = today;

checkinInput.addEventListener("change", () =>
    {
        const arrival = checkinInput.value;

        checkoutInput.min = arrival || today;

        if (
            checkoutInput.value &&
            checkoutInput.value <= arrival
        ) {
            checkoutInput.value = "";
        }
});



