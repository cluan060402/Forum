let comments = [];

function addComment() {
	let nameInput = document.getElementById("name");
	let commentInput = document.getElementById("comment");

	let name = nameInput.value.trim();
	let comment = commentInput.value.trim();

	if (name === "" || comment === "") {
		alert("Vui lòng nhập tên và bình luận của bạn");
		return;
	}

	let newComment = {
		name: name,
		comment: comment
	};

	comments.push(newComment);

	nameInput.value = "";
	commentInput.value = "";

	displayComments();
}

function displayComments() {
	let commentSection = document.getElementById("comment-section");
	commentSection.innerHTML = "";

	for (let i = 0; i < comments.length; i++) {
		let comment = comments[i];
		let commentDiv = document.createElement("div");
		commentDiv.classList.add("comment");

		let nameSpan = document.createElement("span");
		nameSpan.innerText = comment.name;

		let commentP = document.createElement("p");
		commentP.innerText = comment.comment;

		commentDiv.appendChild(nameSpan);
		commentDiv.appendChild(commentP);

		commentSection.appendChild(commentDiv);
	}
}
