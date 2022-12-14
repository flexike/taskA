import React from 'react';
import { useState, useEffect } from "react";
import CardPeople from './components/card';
import { getData } from "./http/index";
import './style/style.css';
import { Button, Form, Select } from "antd";
const { Option } = Select;


function App() {

    const [data, setData] = useState()
    const [gender, setGender] = useState(() => {
        const savedG = localStorage.getItem('G')
        const initialG = JSON.parse(savedG);
        return initialG || "all";
    })
    const [nationality, setNationality] = useState(() => {
        const savedN = localStorage.getItem('N')
        const initialN = JSON.parse(savedN);
        return initialN || "all";
    })
    const nationalities = ['all', 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US']

    const remG = gender
    const remN = nationality

    useEffect(async () => {
        setData( await getData(gender, nationality))
    }, [])

    useEffect(() => {
       localStorage.setItem('G', JSON.stringify(remG))
       localStorage.setItem('N', JSON.stringify(remN))
    }, [remG, remN])

    if (!data) return <div>Loading...</div>

    function onNationalityChange(e) {
        setNationality(e)
    }

    function onGenderChange(e) {
        setGender(e)
    }

  return (
  <div>
        <Form className="formM" name="form">


            <Form.Item name="gender">
                    <Select
                        placeholder="Gender"
                        defaultValue={JSON.parse(localStorage.getItem('G')) || ""}
                        style={{ width: 120, marginRight: 25 }}
                        onChange={onGenderChange}
                    >
                            <Option value="all">All</Option>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                    </Select>
            </Form.Item>


            <Form.Item name="nationality">
                <Select
                    mode="multiple"
                    placeholder="Nationality"
                    defaultValue={JSON.parse(localStorage.getItem('N')) || ""}
                    style={{ width: 120 }}
                    onChange={onNationalityChange}
                >
                        {nationalities.map(item => {
                            return <Option value={item.toLowerCase()}>{item}</Option>
                        })}
                </Select>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={async () => setData(await getData(gender, nationality))}
                >
                        Apply filters
                </Button>
            </Form.Item>


        </Form>

        <div className="asas">
        {data.map((item, index)=> {
                return  <CardPeople
                            key={index}
                            name={item.name.first + " " + item.name.last}
                            gender={item.gender}
                            email={item.email}
                            date={item.dob.date}
                            img={item.picture.large}
                            nat={item.nat}
                        />
                })
        }
        </div>
  </div>
  );
}

export default App;