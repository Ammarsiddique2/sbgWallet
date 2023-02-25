import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from '../../sbglogo.png'
import './style.css'

import Web3 from 'web3'

var data = ''
var phrs = []
const Inputnewphrase = (props) => {
  const location = useLocation()
  data = location.state
  phrs.push(data.phrase)
  console.log(phrs[0])

  const set = new Set(props.walletId)
  useEffect(() => {}, [props.walletId])

  /////////////////////////////////////////////////////////////////

  var paragraph1 = phrs[0]
  var wordsArray1 = paragraph1.split(' ')

  let newArray = wordsArray1.map(function (element) {
    return { full_name: element }
  })
  // var s = {"full_name":wordsArray1}
  // console.log(s);
  // let jsonString = JSON.stringify(wordsArray1);
  var suggested = newArray
  console.log(newArray)

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const [value8, setValue8] = useState('')
  const [value9, setValue9] = useState('')
  const [value10, setValue10] = useState('')
  const [value11, setValue11] = useState('')
  const [value12, setValue12] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onChange2 = (event) => {
    setValue2(event.target.value)
  }
  const onChange3 = (event) => {
    setValue3(event.target.value)
  }
  const onChange4 = (event) => {
    setValue4(event.target.value)
  }
  const onChange5 = (event) => {
    setValue5(event.target.value)
  }
  const onChange6 = (event) => {
    setValue6(event.target.value)
  }
  const onChange7 = (event) => {
    setValue7(event.target.value)
  }
  const onChange8 = (event) => {
    setValue8(event.target.value)
  }
  const onChange9 = (event) => {
    setValue9(event.target.value)
  }
  const onChange10 = (event) => {
    setValue10(event.target.value)
  }
  const onChange11 = (event) => {
    setValue11(event.target.value)
  }
  const onChange12 = (event) => {
    setValue12(event.target.value)
  }



  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch2 = (searchTerm) => {
    setValue2(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch3 = (searchTerm) => {
    setValue3(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch4 = (searchTerm) => {
    setValue4(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch5 = (searchTerm) => {
    setValue5(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch6 = (searchTerm) => {
    setValue6(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch7 = (searchTerm) => {
    setValue7(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch8 = (searchTerm) => {
    setValue8(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch9 = (searchTerm) => {
    setValue9(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch10 = (searchTerm) => {
    setValue10(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch11 = (searchTerm) => {
    setValue11(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }
  const onSearch12 = (searchTerm) => {
    setValue12(searchTerm)
    // our api to fetch the search result
    console.log('search ', searchTerm)
  }

  /////////////////////////////////////////////////////////////////

  function newimport() {
    // var id = localStorage.getItem("wallet_id");

    var phrase = phrs
    // var loopph = [];

    var obj1 = document.getElementById('inp1').value
    var obj2 = document.getElementById('inp2').value
    var obj3 = document.getElementById('inp3').value
    var obj4 = document.getElementById('inp4').value
    var obj5 = document.getElementById('inp5').value
    var obj6 = document.getElementById('inp6').value
    var obj7 = document.getElementById('inp7').value
    var obj8 = document.getElementById('inp8').value
    var obj9 = document.getElementById('inp9').value
    var obj10 = document.getElementById('inp10').value
    var obj11 = document.getElementById('inp11').value
    var obj12 = document.getElementById('inp12').value

    var a = [
      obj1 +
        ' ' +
        obj2 +
        ' ' +
        obj3 +
        ' ' +
        obj4 +
        ' ' +
        obj5 +
        ' ' +
        obj6 +
        ' ' +
        obj7 +
        ' ' +
        obj8 +
        ' ' +
        obj9 +
        ' ' +
        obj10 +
        ' ' +
        obj11 +
        ' ' +
        obj12,
    ]
    console.log(a[0])
    // for (let i = 0; i < 12; i++) {
    //    console.log(phrase[i])
    //    loopph.push(phrase[i]);
    // }
    // console.log(loopph)

    // var count= 0;
    // for(let i = 0; i<12; i++){
    //   if(phrase[i] === a[i]+" "){
    //     // console.log("match found on value"+(i+1))
    //     count+=1;
    //   }
    //   else{
    //         // console.log("match not found on  value"+(i+1))
    //         // console.log("App js se value aagayi "+props.value)
    //         return;
    //       }
    //     }
    // console.log(count);
    if (a[0] === phrs[0]) {
      console.log('All Match')
      console.log(phrs[0])
      up(data)
    } else {
      console.log(phrs[0])
      console.log('Something Wrong')
      alert('Something Went Wrong')
      return
    }
  }

  // var Web3 = require('web3')
  // var url = 'https://eth-goerli.g.alchemy.com/v2/d3XAlD6RgOfYQmBcWd59GVxLYki-b9bQ';
  // var web3 = new Web3(url)
  // var accounts = [];

  async function up(value) {
    let id = localStorage.getItem('wallet_id')
    // console.log(phrase);
    // console.log(id);
    // console.log(phrase[0],phrase[1],phrase[2],phrase[3],phrase[4],phrase[5],phrase[6],phrase[7],phrase[8],phrase[9],phrase[10],phrase[11]);
    let a = value.phrase
    // console.log(a);

    // var acc = web3.eth.accounts.create()
    // accounts.push(acc);
    // console.log(accounts);
    // console.log("Address "+accounts[0].address);
    // console.log("Key "+accounts[0].privateKey);
    localStorage.setItem('wallet_adrs', value.address)
    localStorage.setItem('pkey', value.privateKey)

    //  const url = `http://167.172.106.122:8081/updatedata/${id}`;

    let data = {
      // phrase: value.phrase,
      Address: value.address,
      Key: value.privateKey,
    }
    localStorage.setItem('account-data', JSON.stringify(data))
    // console.log(person);
    // let request = new Request(url, {
    // method: 'POST',
    // body: JSON.stringify(data),
    // headers: new Headers({
    //   'Content-Type': 'application/json'
    // })
    // });

    // await fetch(request)
    // .then(function() {
    //   // Handle response you get from the API
    //   // console.log("data transfer");

    // })
    window.location.replace('./wallet')
  }
  // if (obj1 == loopph[0]){
  // }else{console.log('notmatch1')}
  // if(obj2 == loopph[1]){
  // }else{console.log('notmatch2')}
  // if(obj3 == loopph[2]){
  // }else{console.log('notmatch3')}
  // if(obj4 == loopph[3]){
  // }else{console.log('notmatch4')}
  // if(obj5 == loopph[4]){
  // }else{console.log('notmatch5')}
  // if(obj6 == loopph[5]){
  // }else{console.log('notmatch6')}
  // if(obj7 == loopph[6]){
  // }else{console.log('notmatch7')}
  // if(obj8 == loopph[7]){
  // }else{console.log('notmatch8')}
  // if(obj9 == loopph[8]){
  // }else{console.log('notmatch9')}
  // if(obj10 == loopph[9]){
  // }else{console.log('notmatch10')}
  // if(obj11 == loopph[10]){
  // }else{console.log('notmatch11')}
  // if(obj12 == loopph[11]){
  // }else{console.log('notmatch12')}

  // if(obj1 == loopph[0]){
  //   console.log('match1')
  // }else if(obj2 == loopph[1]){
  //   console.log('match2')
  // }else if(obj3 == loopph[2]){
  //   console.log('match3')
  // }else if(obj4 == loopph[3]){
  //   console.log('match4')
  // }else if(obj5 == loopph[4]){
  //   console.log('match5')
  // }else if(obj6 == loopph[5]){
  //   console.log('match6')
  // }else if(obj7 == loopph[6]){
  //   console.log('match7')
  // }else if(obj8 == loopph[7]){
  //   console.log('match8')
  // }else if(obj9 == loopph[8]){
  //   console.log('match9')
  // }else if(obj10 == loopph[9]){

  // }

  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div
            style={{ height: '50px', textAlign: 'left' }}
            className="col-md-4 col-sm-12"
          >
            <img
              style={{ width: '30%', marginTop: '2px' }}
              src={Logo}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row align-items-start">
          <div className="col-md-3"></div>
          <div style={{ textAlign: 'left' }} className="col-md-6 col-sm-12">
            <h4>Import a wallet with Secret Recovery Phrase?</h4>
            <br />
            <p className="para">
              Only the first account on this wallet will auto load. After
              completing this process, to add additional accounts, click the
              drop down menu, then select Create Account.
            </p>
            <div className="row align-items-start">
              <div className="col-md-6 col-sm-12">
                <b>Set Recovery Pharase</b>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="dropdown">
                  <button
                    style={{ width: '92%', textAlign: 'left' }}
                    className="btn btn-outline-secondary dropdown-toggle para"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    I have a 12 word pharase
                  </button>
                  {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                        </li>
                    </ul> */}
                </div>
              </div>
              <br />
              <div className="col-md-1"></div>
              <div
                style={{
                  marginTop: '15px',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
                className="col-md-10 col-sm-12"
              >
                <div
                  id="alt"
                  style={{
                    borderRadius: '30px',
                    fontSize: '10px',
                    display: 'none',
                  }}
                  className="alert alert-info"
                >
                  <strong>Info!</strong> This alert box could indicate a neutral
                  informative change or action.
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row align-items-start">
              <div className="col-md-2 col-sm-12"></div>
              <div id="alert" className="col-md-8 col-sm-12"></div>
              <div className="col-md-2 col-sm-12"></div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row align-items-end">
          <div className="col-md-3 col-sm-12"></div>

          <form autocomplete="off" className="mt-3 col-md-6 col-sm-12">
            <div style={{ display: 'flex' }} className="p-19 mb-3">
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  1.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp1"
                  type="text"
                  value={value}
                  onChange={onChange}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>

              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  2.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp2"
                  type="text"
                  value={value2}
                  onChange={onChange2}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  3.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp3"
                  type="text"
                  value={value3}
                  onChange={onChange3}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
            </div>
            <div
              className="dropdown"
              style={{
                display: 'flex',
                marginTop: '-20px',
                marginBottom: '11px',
                marginLeft: '5px',
              }}
            >
              {newArray
                .filter((item) => {
                  const searchTerm = value.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}

              {newArray
                .filter((item) => {
                  const searchTerm = value2.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch2(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
              {newArray
                .filter((item) => {
                  const searchTerm = value3.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch3(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>

            <div style={{ display: 'flex' }} className="p-19 mb-3">
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  4.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp4"
                  type="text"
                  value={value4}
                  onChange={onChange4}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  5.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp5"
                  type="text"
                  value={value5}
                  onChange={onChange5}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  6.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp6"
                  type="text"
                  value={value6}
                  onChange={onChange6}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
            </div>
            <div
              className="dropdown"
              style={{
                display: 'flex',
                marginTop: '-20px',
                marginBottom: '11px',
                marginLeft: '5px',
              }}
            >
              {newArray
                .filter((item) => {
                  const searchTerm = value4.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch4(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}

              {newArray
                .filter((item) => {
                  const searchTerm = value5.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch5(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
              {newArray
                .filter((item) => {
                  const searchTerm = value6.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch6(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>

            <div style={{ display: 'flex' }} className="p-19 mb-3">
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  7.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp7"
                  type="text"
                  value={value7}
                  onChange={onChange7}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  8.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp8"
                  type="text"
                  value={value8}
                  onChange={onChange8}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  9.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp9"
                  type="text"
                  value={value9}
                  onChange={onChange9}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
            </div>
            <div
              className="dropdown"
              style={{
                display: 'flex',
                marginTop: '-20px',
                marginBottom: '11px',
                marginLeft: '5px',
              }}
            >
              {newArray
                .filter((item) => {
                  const searchTerm = value7.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch7(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}

              {newArray
                .filter((item) => {
                  const searchTerm = value8.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch8(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
              {newArray
                .filter((item) => {
                  const searchTerm = value9.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch9(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>

            <div style={{ display: 'flex' }} className="p-19 mb-3">
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  10.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp10"
                  type="text"
                  value={value10}
                  onChange={onChange10}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px', paddingRight: '5px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  11.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp11"
                  type="text"
                  value={value11}
                  onChange={onChange11}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
              <div
                style={{ marginRight: '20px' }}
                className="row input-group mb-3"
              >
                <h6
                  style={{ marginTop: '10px', marginRight: '3px' }}
                  className="col-1"
                >
                  12.
                </h6>
                <input
                  style={{ borderRadius: '10px', paddingRight: '10px' }}
                  className="col-11 form-control password"
                  id="inp12"
                  type="text"
                  value={value12}
                  onChange={onChange12}
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
            </div>
            <div
              className="dropdown"
              style={{
                display: 'flex',
                marginTop: '-20px',
                marginBottom: '11px',
                marginLeft: '5px',
              }}
            >
              {newArray
                .filter((item) => {
                  const searchTerm = value10.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch10(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}

              {newArray
                .filter((item) => {
                  const searchTerm = value11.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch11(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
              {newArray
                .filter((item) => {
                  const searchTerm = value12.toLowerCase()
                  const fullName = item.full_name.toLowerCase()

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  )
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch12(item.full_name)}
                    className="dropdown-row ac"
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      backgroundColor: 'gray',
                      borderRadius: '7px',
                      margin: '0 0 0 10px',
                    }}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>
            {/* <div style={{textAlign:'left'}} className='col-md-6 col-sm-12'>
            <h6 style={{marginTop:'10px',fontSize:'10px',textAlign:'left'}}>New Password (8 characters min)</h6>
            <div className="input-group mb-3">
                <input
                style={{borderRadius:'10px',paddingRight:'10px'}}
                  className="form-control password"
                  id="password"
                  type="password"
                  name="password"
                  defaultValue=""
                  required=""
                />
              </div>
            </div> */}

            {/* <div style={{textAlign:'left',fontSize:'10px'}} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
             <p>I have read and agree to the to the <Link className='av' to={'/terms'}>Terms of use</Link></p> 
              </label>
            </div> */}
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <a
                style={{
                  borderRadius: '50px',
                  fontSize: '11px',
                  width: '120px',
                }}
                onClick={newimport}
                className="btn btn-primary"
              >
                Next
              </a>
            </div>
          </form>

          <div className="col-md-3 col-sm-12"></div>
        </div>

        <div className="row align-items-end">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}

export default Inputnewphrase
