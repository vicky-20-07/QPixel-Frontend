import React, { useState } from 'react';
import './FAQ.css';

const AccordionItem = ({ id, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div
                className={`questions ${isOpen ? 'open' : ''}`}
                onClick={handleToggle}
            >
                {question}
            </div>
            <div className={`exp ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </li>
    );
};

const FAQ = () => {
    return (
        <div className="faq" id="section-3">
            <h2 align="center">Frequently Asked Questions</h2>
            <ul className="accordion">
                <AccordionItem
                    id="first"
                    question="What is QPixel?"
                    answer="QPixel is an online platform to share your photographic masterpieces with the other photography lovers. Every user can upload their photographs under their profiles and can let the other users to interact with them."
                />
                <AccordionItem
                    id="second"
                    question="How much does QPixel cost?"
                    answer="As QPixel is a demo project, there is no subscription planned to upload or interact with any other contents inside. But, the subscription plan will be planned for the users in favor of the original creators for the copyrights."
                />
                <AccordionItem
                    id="third"
                    question="How do I get recogonition?"
                    answer="The suggested contents in the home page will be displayed in the order of likes that the photograph got from the users. Also the other photographs will be displayed at random in the home screen."
                />
                <AccordionItem
                    id="fourth"
                    question="What are the features do I get?"
                    answer="The photographers can upload their images under their profiles. If the photographs are opened for public, the other users can download the images in the native resolution of the image uploaded. The creators can also private their photographs from the public users."
                />
                <AccordionItem
                    id="fifth"
                    question="How can I upload my photographs?"
                    answer="The images can be uploaded inside your own profile. The create section of the QPixel is the place to upload all the images. Add the title, description and tags for your images that are to be uploaded. Click the upload button to upload the image under your profile"
                />
            </ul>
        </div>
    );
};

export default FAQ;
