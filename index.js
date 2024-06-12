// add more complex scripts as needed
console.log("Hello from index.js!");
document.addEventListener('DOMContentLoaded', (event) => {
    const driver = window.driver.js.driver
    const driverObj = driver({
        showProgress: true,
        steps: [
            
            { element: '#section313', popover: { title: 'contact-us 9 Section', description: 'This is the contact-us section.', align: 'start' }},
            
        ]
    });

    // document.getElementById('start-tour').addEventListener('click', () => {
        driverObj.drive();
    //});
});