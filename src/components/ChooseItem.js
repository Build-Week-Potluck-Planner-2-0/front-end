import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import Select from 'react-select';

export default function ChooseItem() {
    // let navigate = useNavigate();
    // console.log("useNavigate value: ", navigate);
    const { potluckId } = useParams();
    const [ options, setOptions ] = useState(null);
    const [ newEvent, setNewEvent ] = useState({});
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    useEffect(() => {
        axiosWithAuth()
            .get(`/potlucks/${potluckId}`)
            .then(res => {
                setNewEvent(res.data);

                const newOptions = res.data.items.map(item => {

                    if(item.providedBy !== null) return null;

                    return {
                        label: `${item.name} Qty: ${item.quantity} - Description: ${item.description}`,
                        value: item.name,
                        quantity: item.quantity,
                        description: item.description,
                        item_id: item.item_id
                    }
                }).filter(ind => ind !== null);


                setOptions(newOptions);
            })
            .catch(err => console.error(err));
    }, [])

    const handleItemChange = (items) => {
        // get the new event,
        // go into the new event items,
        // only leave the ones that are not in the itemsArray passed in as a param
        // create a UpdatedEventItems where the previous items, and the ones selected by the user 
        // formatted properly



        const newEventCopy = {...newEvent};

        items.forEach(item => {
            newEventCopy.items.forEach(itm => {
                if(itm.item_id === item.item_id){
                    itm.providedBy = +item.providedBy;
                }
            })
        })

        console.log(newEventCopy.items);


        setNewEvent({
            ...newEventCopy
        })

    }
    
    const handleConfirm = () => {

        axiosWithAuth()
            .put(`/potlucks/${potluckId}/${userId}`, newEvent)
            .then().catch(err => console.error(err))
            .finally(() => {
                setOptions(null);
                setNewEvent({})
                navigate('/dashboard');
            })
    }

    return(
        <div>
            <h1>CHOOSE ITEM</h1>
            <Select
                isMulti
                name="items"
                options={options}
                onChange={(e) => {
                    const items = e.map(item => {

                        return {quantity: item.quantity, description: item.description, providedBy: userId, potluck_id: potluckId, item_id: item.item_id, name: item.value }
                        })

                    handleItemChange(items)
                }}
            />
            <button onClick={handleConfirm}>CONFIRM</button>
        </div>
        
    )
}