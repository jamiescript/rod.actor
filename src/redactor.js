let actionRedact = function() {
  const redactedOutput = '████';
  let originalText = document.querySelector('.unredacted-container textarea').value; // original content to be redacted
  let contentToRedact = document.querySelector('.to-redact'); // words to redact from original content
  let contentToRedactValue = contentToRedact.value;
  contentToRedact.focus();

  // prepare content for redacting
  let redactList = contentToRedactValue.split(/[\W]+/);
  let redactOriginalList = originalText.trim().split(/[\W]+/);

  // redact original content
  redactList.forEach(function(redactWord) {
    redactOriginalList.forEach(function(originalWord, i) {
      if (originalWord &&
          redactWord.trim().toLowerCase() === originalWord.toLowerCase()
         ) {
        redactOriginalList.splice(i, 1, redactedOutput);
      }
    });
  });

  // prepare and output redacted content
  let redactedText = redactOriginalList.join(' ');

  document.querySelector('.redacted-container textarea').innerText = redactedText;
};

actionRedact();

// TODO
// comma seperated terms
// one click copy redacted output
// focus on redact input text