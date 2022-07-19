import React from "react"
import InputCategories from "./InputCategories"


export default function BrendInput({ category, СhooseCategory }) {


    


    
    
    const input = [null]
    
    function VerificationInput(input) {


        if(input.checked = true){
            console.log("da")
        }











       /* console.log(input)

        for (var i = 0; i < input.length; i++) {
            if (input[i] == current.value && current.checked == false) {
                input[i] = null
                console.log(i)
                console.log(current.value)
                console.log(input, "111111")
            
                return

            }
            else if (input[i] === null && input.length == 1 ) {
                input[i] = current.value
                console.log(" 2222 ")
                console.log(input)
                return
            }

            else if (input[i] === null ) {
            
            }

            else if (input[i] != current.value && current.checked == true) {
                input.push(current.value)
                console.log(" 3333333 ")
                console.log(input)
                return
            }


            console.log(i)
        }*/

        СhooseCategory()

    }



    const inputRef = React.createRef();
    const result = [];
    category?.forEach(element => {


        result.push(<InputCategories category={element} VerificationInput={VerificationInput}/>)

    });

    const categ = {}


    return (
        <div className=" mx-[70px]">
            {result}
        </div>

    )

}