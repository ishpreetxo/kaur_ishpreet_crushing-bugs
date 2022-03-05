(() => {
    // let or const can be used and you can give whatever variable name you want to give to our id/class
    let thumbNail = document.querySelectorAll('#buttonHolder img'),
        puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
        dropZones = document.querySelectorAll('.drop-zone'),
       GameBoard = document.querySelector('.puzzle-board');
    // this is kind of index
    const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"]



    // setter and the getter event
    // function is used below
    function changeImgSet() {
        // key is defined as this.dataset.bgref
        // hence we don't have to write the whole thing everytime in our script
        let key = this.dataset.bgref;
        console.log(key);
        // for backgroundImage
        GameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
        puzzlePieces.forEach(piece => {
            document.querySelector('.puzzle-pieces').append(piece)

        });

        // using index

        puzzlePaths.forEach((img, index) => {
            console.log('image-reset')
            puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
        });
    }
    // console.log is in notes now because it is not needed now well, in most case it is used to check element activity in console tab after the clickevent
    function startDrag(event) {
        //console.log('dragging picture');
        event.dataTransfer.setData('draggedElement', event.target.id);
    }

    // preventDefault function is used to prevent any default event or in other word to prevent any default
    // of an element
    function draggedOver(event) {
        event.preventDefault();
        //console.log('dragged over');
    }

    // once the image is dropped on game board it will be handle accordingly with below function
    function handleDrop(event) {
        event.preventDefault();
        //console.log('dropped over here');
        // current el
        let currentEl = event.dataTransfer.getData('draggedElement');
        // from the hint i=0 using reference 
        if (this.children.length == 0) {
          // appendChild is java built in
            this.appendChild(document.querySelector(`#${currentEl}`));
        }
    }
    // with this image sets will be changed
    // triggers after users click
    thumbNail.forEach(thumbNail => thumbNail.addEventListener('click', changeImgSet));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', draggedOver);
        zone.addEventListener('drop', handleDrop);
    });

})();
