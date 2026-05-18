for (let i = 0; i < sanpham.length; i++) {
    document.getElementById("spbc").innerHTML +=
`
<div class="col-md-4 ">
    <div class="card text-center h600">
        <img class="card-img-top" src="./img/${sanpham[i].hinh}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${sanpham[i].ten}</h4>
            <p class="card-text">${sanpham[i].moTa}</p>
            <h4 class="card-title">${sanpham[i].giaBan}</h4>
            <a href="#" class="btn btn-primary">Chi tiết</a>
            <a href="#" class="btn btn-primary" onclick='addCart(this)'>Mua ngay</a>
        </div>
    </div>
</div>
`
    
}