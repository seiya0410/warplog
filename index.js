<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <center><h1>WARP LOG checker</h1>
    <form action="/" method="POST" enctype="multipart/form-data">
        <div id="drop-zone" style="border: 1px solid; padding: 30px;">
            <h2><p>Drag&Drop your WARP log</p></h2>
            <input type="file" name="file" id="file-input">
        </div
        <div id="preview"></div>
        <input type="submit" style="margin-top: 50px">
        </form></center>

        <a href="/log"> <%=value %></a>

</body>
</html>

<script type-"text/javascript">

    var dropZone = document.getElementById('drop-zone');
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('file-input');


    dropZone.addEventListener('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#e1e7fo';
    }, flase);

    dropZone.addEventListener('dragleave', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#fffff';
    }, false);

    fileInput.addEventListener('change', function() {
        previewFile(this.files[0]);
    });

    dropZone.addEventListener('drop', function(e){
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#ffffff';
        var files = e.dataTransfer.files;
        if (files.length > 1) return alert('You can upload only 1 file');
        fileInput.files = files;
        previewFile(files[0]);
    }, false);

    function previewFile(file) {

        var fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function() {
            let img = document.createElement('img');
            img.setAttribute('src', fr.result);
            preview.innerHTML = '';
            preview.appendChild(img);
        };
    }
</script>
