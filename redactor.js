let actionRedact = function() {
  const redactedOutput = '████';
  let originalText = document.querySelector('.unredacted-text').value; // original content to be redacted
  let contentToRedact = document.querySelector('.to-redact').value; // words to redact from original content
  
  // prepare content for redacting
  let redactList = contentToRedact.split(/[\W]+/);
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
  document.querySelector('.redact-text p').innerText = redactedText;
};

document.querySelector('.redact-action').onclick = function() {
  actionRedact();
};

actionRedact();
