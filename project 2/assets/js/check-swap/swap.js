$('[type="checkbox"]').on('change', function (e) {
    var checkedCheckboxes = $('.form-check-input:checked');
    if (checkedCheckboxes.length > 5) {
        e.preventDefault();
        openSwapPopup($(this));
    }
});
function openSwapPopup(newCheckbox) {
    const checkboxesToSwap = $('.form-check-input:checked').not(newCheckbox);
    const popupContainer = $('<div class="swap-popup-container"></div>');
    const popupContent = $('<div class="swap-popup-content"></div>');
    const popupCloseBtn = $('<button class="btn btn-danger">Cancel</button>');
    // Create a list of checkboxes in the popup
    checkboxesToSwap.each((index, checkbox) => {
        const label = $(checkbox).siblings('label').text();
        const checkboxItem = $(`<div class="form-check">
                                   <input class="form-check-input" type="checkbox" value="${index}" id="swapCheckbox-${index}">
                                   <label class="form-check-label" for="swapCheckbox-${index}">${label}</label>
                               </div>`);
        popupContent.append(checkboxItem);
    });
    // Append close button
    popupContent.append(popupCloseBtn);
    // Append popup content to the container
    popupContainer.append(popupContent);
    // Append the container to the body
    $('body').append(popupContainer);
    // Handle the "Cancel" button click
    popupCloseBtn.on('click', function () {
        popupContainer.remove();
    });
    // Handle the "Swap" button click
    $('input[name="swapCheckbox"]').on('change', function () {
        const selectedCheckboxIndex = $(this).val();
        if (selectedCheckboxIndex !== undefined) {
            const oldCheckbox = checkboxesToSwap.eq(parseInt(selectedCheckboxIndex, 10));
            swapCheckboxes(oldCheckbox, newCheckbox);
            popupContainer.remove();
        }
        else {
            alert('Please select a checkbox to swap.');
        }
    });
}
function swapCheckboxes(oldCheckbox, newCheckbox) {
    oldCheckbox.prop('checked', false);
    // Perform additional actions as needed
    // For example,
    // updateDisplayedCoins([...]); // Update the displayed coins in the main content
}
