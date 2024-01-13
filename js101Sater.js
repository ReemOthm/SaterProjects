let bookStrore = [];

function addBook(...args){
    bookStrore.push(...args);
    return bookStrore;
}

function editBook(book, edit, content){

    switch(edit){

        case "quantity":
            for(let i=0; i<bookStrore.length;i++){
                for(let j=0; j<=5;j++){
                    if(bookStrore[i][j] == book){
                        console.log(bookStrore[i]);
                        bookStrore[i][4] = content;
                        console.log(bookStrore[i]);
                    }
                }
            }
        break;

        case "price":
            for(let i=0; i<bookStrore.length;i++){
                for(let j=0; j<=5;j++){
                    if(bookStrore[i][j] == book){
                        console.log(bookStrore[i]);
                        bookStrore[i][3] = content;
                        console.log(bookStrore[i]);
                    }
                }
            } 
        break;
        default:
            console.log("Enter a Valid Data");
    }    
}

function deleteBook(book){

    for(let i=0; i<bookStrore.length;i++){
        for(let j=0; j<=2;j++){
            if(bookStrore[i][j] == book){
                bookStrore.splice(i,1);
                console.log("Delete Successfully");
                console.log(bookStrore);
            }
        }
    }
}

function searchBook(book){
    let result= "";

    for(let i=0; i<bookStrore.length;i++){
        for(let j=0; j<=2;j++){
            if(bookStrore[i][j] == book){
                result = bookStrore[i]
            }
        }
    }

    if(result ==""){
        return "THE BOOK HAS NOT FOUND";
    }
    else{
        return "The book is "+result;
    }
}

function buyBook(book, quantity, price){

    if(searchBook(book) == "THE BOOK HAS NOT FOUND"){
        console.log("THE BOOK HAS NOT FOUND");
    }
    else{
        for(let i=0; i<bookStrore.length;i++){
            for(let j=0; j<=2;j++){
                if(bookStrore[i][j] == book){
                    if(quantity<= bookStrore[i][4]){
                        bookStrore[i][4] -= quantity;
                        if(quantity*bookStrore[i][3] <= price){
                            console.log("Bill Content\n\tBook Title: "+bookStrore[i][1]+"\n\tQuantity: "+quantity+"\n\tPrice: "+quantity*bookStrore[i][3]+"SR");
                        }
                        else{
                            console.log("The price does't enough");
                        }
                    }
                    else{
                        console.log("There is no enought quantity as you want");
                    }
                }
            }
        }
    }

}

addBook([1, "Start with why", "Simon Sinek", 80.0, 13]);
addBook([2, "But how do it know", "J. Clark Scott", 59.0, 22]);
addBook([3, "Clean Code", "Robert Cecil Martin", 50.0, 5]);
addBook([4, "Zero to One", "Peter Thiel", 45.0, 12]);
addBook([5, "You don't know JS", "Kyle Simpson", 39.9, 9]);

for(book of bookStrore){
    console.log(book);
}

editBook("Start with why", "price", 2);

deleteBook("Robert Cecil Martin");

for(book of bookStrore){
    console.log(book);
}

console.log(searchBook(3));

buyBook("But how do it know", 22, 2000);