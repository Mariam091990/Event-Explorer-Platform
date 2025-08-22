import React from 'react';

const Answer = ({singleAnswer}) => {


    // console.log(singleAnswer);
    return (
        <div className='border rounded-xl p-3 m-2 '>

                 <li>{singleAnswer.question}</li>
                Answer: <br />
                <div className='border-dashed border-t-2 border-b-2 '>
                <p>{singleAnswer.answer}</p></div>


        </div>
    );
};

export default Answer;