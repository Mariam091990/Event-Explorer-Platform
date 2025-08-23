import React from 'react';
import { useLoaderData } from 'react-router';
import Answer from '../components/Answer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FrequentQues = () => {

    const answer = useLoaderData();
    console.log(answer);
    return (

        <div className='container mx-auto'>
             <header>
                <Navbar></Navbar>
            </header> 

            <main>
                <div className=''>
                    {

                        answer.map((singleAnswer) => <Answer key={singleAnswer.id} singleAnswer={singleAnswer}></Answer>)

                    }
                </div>

            </main>

            <Footer>

                <Footer></Footer>
            </Footer>
        </div>
    );
};

export default FrequentQues;