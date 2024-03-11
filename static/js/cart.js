var updateBtns = document.getElementsByClassName('update-cart')

for (var x = 0; x < updateBtns.length; x++) {
	updateBtns[x].addEventListener('click', function(){
		var productId = this.dataset.product
		var action = this.dataset.action
		console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)

		if (user == 'AnonymousUser'){
			console.log('User NOT logged in')
			
		}else{
			updateUserOrder(productId, action)
		}
    })
}

function updateUserOrder(productId, action){
	console.log('User logged in, sending the data....')

    var url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        }, 
        body:JSON.stringify({'productId': productId, 'action':action})
    })
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log('data:', data);
        location.reload();
    });
}