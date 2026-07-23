(() => {
  const button = document.querySelector('.menu-button');
  const protocol = document.querySelector('.protocol');

  button.addEventListener('click', () => {
    const isOpen = protocol.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    protocol.setAttribute('aria-hidden', String(!isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
  });

  // Trace fragment: decode the character codes only after correlating the signal.
  const relayTrace = [0x53, 0x33, 0x56, 0x79, 0x63, 0x31, 0x39, 0x6f, 0x59, 0x57, 0x4e, 0x72, 0x61, 0x57, 0x35, 0x6e, 0x64, 0x51, 0x3d, 0x3d]
    .map(code => String.fromCharCode(code)).join('');
  window.__rm13 = Object.freeze({ relayTrace });
})();
