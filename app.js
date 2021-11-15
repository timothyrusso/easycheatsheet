const blockTemplate = document.querySelector('#block-template').content.querySelector('.block'); // Select the card template with his content
const blocksList = document.querySelector('.blocks-grid'); // Let's find the places list in the DOM

function generateBlock(block) { //---GENERATE CARDS
    const blockElement = blockTemplate.cloneNode(true); // Clone template card
    const blockEditButton = blockElement.querySelector('.block__edit'); // Query delete button
    const blockTitle = blockElement.querySelector('.block__title'); // Query image caption element
    const importanceButton = blockElement.querySelector('.block__important'); // Query the like button
    const blockDescription = blockElement.querySelector('.block__description');
    const blockExample = blockElement.querySelector('.block__example');
    const blockLink = blockElement.querySelector('.block__link');
    blockTitle.textContent = block.title;
    blockDescription.textContent = block.description;
    blockExample.textContent = block.example;
    blockLink.href = block.link;
    importanceButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('block__importance_active');
    });
    blockEditButton.addEventListener('click', () => onDeleteClick(blockElement));
    return blockElement;
  }
  
  function renderBlock(block, container) { //---APPEND THE CARD TO THE DOM
    blocksList.append(block);
  }
  
  initialBlocks.forEach(function (block) {
    const newBlock = generateBlock(block);
    renderBlock(newBlock, blocksList);
  })