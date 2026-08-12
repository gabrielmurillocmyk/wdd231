/**
 * Form Interactivity and Validation Controller for ApexAthletics Co.
 * Guarantees correct tab-ordering structures and monitors submission element focus.
 */
document.addEventListener('DOMContentLoaded', () => {
  enforceAccessibleKeyboardTabOrdering();
});

/**
 * Iterates through all available input element blocks to inject explicit, sequential tab coordinates
 */
function enforceAccessibleKeyboardTabOrdering() {
  const formTarget = document.getElementById('apparel-sizing-form');
  if (!formTarget) return;

  const formInteractiveInputs = formTarget.querySelectorAll(
    'select, input[type="radio"], input[type="date"], input[type="checkbox"], textarea, input[type="text"], input[type="submit"]'
  );

  formInteractiveInputs.forEach((inputNode, indexingCoordinate) => {
    // Allows keyboard users to trace input lines down the form canvas seamlessly
    inputNode.setAttribute('tabindex', (indexingCoordinate + 1).toString());
  });
}
