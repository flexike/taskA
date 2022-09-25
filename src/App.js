import React from 'react';
import {useState, useEffect} from "react";
import CardPeople from './components/card';
import {getData} from "../http";
import {Button, Form, Select} from "antd";
import './style/style.css';
const { Option } = Select;


function App() {

    const [db, setDb] = useState()
    const [gender, setGender] = useState('all')
    const [nationality, setNationality] = useState('all')
    const [filt, setFilt] = useState([])

    useEffect(() => {

    }, [])

    if (!db) return <div>Loading...</div>


    const cards = db.results.map(item => {
        // console.log(item)
        return(
            <CardPeople
                key={item.id.value}
                name={item.name.first + " " + item.name.last}
                gender={item.gender}
                email={item.email}
                date={item.dob.date}
                img={item.picture.large}
                nat={item.nat}
            />
        )
    })

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    function onNationalityChange(e) {
        setNationality(e)
    }

    function onGenderChange(e) {
        setGender(e)
    }

  return (
    <div className="asas">
        <Form {...layout} className="formM" name="form">
            <Form.Item
                name="gender"
            >
                <Select
                    defaultValue="Gender"
                    style={{ width: 120, marginRight: 25 }}
                    onChange={onGenderChange}
                >
                    <Option value="all">All</Option>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="nationality"
            >
                <Select
                    defaultValue="Nationality"
                    style={{ width: 120 }}
                    onChange={onNationalityChange}
                >
                    <Option value="all">All</Option>
                    <Option value="au">AU</Option>
                    <Option value="br">BR</Option>
                    <Option value="ca">CA</Option>
                    <Option value="ch">CH</Option>
                    <Option value="de">DE</Option>
                    <Option value="dk">DK</Option>
                    <Option value="es">ES</Option>
                    <Option value="fi">FI</Option>
                    <Option value="fr">FR</Option>
                    <Option value="gb">GB</Option>
                    <Option value="ie">IE</Option>
                    <Option value="ir">IR</Option>
                    <Option value="no">NO</Option>
                    <Option value="nl">NL</Option>
                    <Option value="nz">NZ</Option>
                    <Option value="tr">TR</Option>
                    <Option value="us">US</Option>
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => getData(gender, nationality).then(r => console.log(r))}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
        {cards}
    </div>
  );
}

export default App;