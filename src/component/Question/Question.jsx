import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
    return (
        <div>
            <div className='text-center'>
                <h3>Frequently asked questions</h3>
                <p>Below you can find the most common questions about Private Chefs in America</p>
            </div>
            <div className='w-75 mx-auto my-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How can I hire a Private Chef in America?</Accordion.Header>
                        <Accordion.Body>
                        To hire a Private Chef just select a date, number of people, let us know your food preferences and intolerances and share with us a few details about your kitchen. In a matter of a few hours, you will receive four tailor-made menus and will be able to review the chef's profile, reviews and pictures of their dishes. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the maximum amount of people allowed for a Private Chef service?</Accordion.Header>
                        <Accordion.Body>
                        There is no maximum number of people, although a Private Chef service is usually carried out in a more intimate level along with friends or family, and usually in homes where space is limited. Even though there is no maximum number of people, generally the groups do not exceed 15 people.
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Does the Private Chef cook at my house?</Accordion.Header>
                        <Accordion.Body>
                        A Private Chef always prepares the menu at the client's home, as it is an inherent part of the experience. However, depending on the complexity of the menu, the chef may prepare a mise en place before going to the client's home, as some dishes take several hours to prepare and it would be impossible to execute all the steps at the client's home.
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What does a Private Chef service include in America?</Accordion.Header>
                        <Accordion.Body>
                        A Private Chef service includes everything necessary to enjoy the experience, from the customization of a menu to the purchase of ingredients, the mise en place prior to the service, the preparation of the menu at the guests' home, the complete table service, and lastly the set up and cleaning of the kitchen and the spaces used during the experience. Tableware and glassware are not included. Gratuity is entirely up to the guests' discretion.
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Can I cook along with the Private Chef?</Accordion.Header>
                        <Accordion.Body>
                        Absolutely! Usually, there are always several food lovers among the diners who take the opportunity to share some time with the chef, learn some tricks in the kitchen and the step-by-step of each of the dishes on the menu. For those diners who really want to get hands on, they can of course join the chef and cook!
        
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Question;