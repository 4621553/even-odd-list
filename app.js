let usersWord = "";
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element.value;

  console.log(usersWord);
}


function handleSubmit(x=false) {
  let newListItem = document.createElement('LI')
  newListItem.innerText = usersWord
  let wordlength 
    if (x) {
     wordlength = usersWord.length - 1
    } else {
      wordlength = usersWord.length
    }

  if (wordlength % 2 === 0) {
    evenList.appendChild(newListItem)
  } else {
  oddList.appendChild(newListItem)
  }

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    handleSubmit(true)
}
}

// function spaceSubmit() {
//   let newListItem = document.createElement('LI')
//   newListItem.innerText = usersWord

//   if ((usersWord.length - 1) % 2 === 0) {
//     evenList.appendChild(newListItem)
//   } else {
//   oddList.appendChild(newListItem)
//   }

//   usersWord = ""
//   document.getElementById("even-odd-form").reset()

// }

function erase() {
  document.getElementById("odd").innerHTML = null
  document.getElementById("even").innerHTML = null
}
