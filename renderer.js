function resizeImage() {
    var fileInput = document.getElementById('fileInput');
    var widthInput = document.getElementById('widthInput');
    var heightInput = document.getElementById('heightInput');
    var resultContainer = document.getElementById('resultContainer');

    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                var newWidth = parseInt(widthInput.value);
                var newHeight = parseInt(heightInput.value);

                canvas.width = newWidth;
                canvas.height = newHeight;

                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                var resizedDataUrl = canvas.toDataURL('image/jpeg');

                resultContainer.innerHTML = '<h3>Resized Image&nbsp; <i class="fa-solid fa-expand"></i></h3>';
                resultContainer.innerHTML += '<img src="' + resizedDataUrl + '" alt="Resized Image">';
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please choose a file.');
    }
}
