const exampleButton = document.querySelector('#example-button');
const exampleOutput = document.querySelector('#example-output');

exampleButton.addEventListener('click', () => {
  const isHidden = exampleOutput.hidden;
  exampleOutput.hidden = !isHidden;
  exampleOutput.textContent = isHidden
    ? 'Prompt: “Give me a 10-minute study plan.”  →  Draft: “Pick one topic, review for 7 minutes, then test yourself for 3.” A person can adjust it to fit their real schedule.'
    : '';
  exampleButton.setAttribute('aria-expanded', String(isHidden));
  exampleButton.innerHTML = isHidden
    ? 'Hide the example <span aria-hidden="true">↗</span>'
    : 'Try a tiny example <span aria-hidden="true">↗</span>';
});
