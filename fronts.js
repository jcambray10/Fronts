function double(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]*=2
    }
    return arr
}
let arr=[1,2,3,4,5]
double(arr)
console.log(arr) //What gets console logged here? -- Doubles of the Array

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
        //Creating a new node object with the value provided
        new_node= new Node(val);
        //Checking to see if the current list does not have a head node (if the list is empty)
        //If the list is empty, place the new node as the head 
        if(!this.head){
            this.head=new_node ;
            return this;
        }
        //If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next=this.head;
        //Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head=new_node;
        return self;
    }
}



// echo "# Fronts" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jcambray10/Fronts.git
// git push -u origin main