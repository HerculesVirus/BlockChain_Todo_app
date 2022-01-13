import React from 'react';
import Web3 from 'web3';
import { useEffect , useState } from 'react';
import { Container ,Row ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const TodoApp =()=>{
    //State
    const [account , setAccount] = useState('')
    // const [web ,setweb] = useState("")
    const [networkType , setNetworkType] = useState('')
    //Hooks
    useEffect(()=>{
        loadBlockChainData()
    },[])
    const loadBlockChainData = async ()=>{
        

        //Fetch account
        await window.ethereum.eth_requestAccounts;   // after depreceated const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var web3 = window.web3;           // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== "undefined") {
            web3 = new Web3(Web3.givenProvider);
        } 
        else {
            web3 = new Web3("http://127.0.0.1:7545");
        }
        const network = await web3.eth.net.getNetworkType()
        console.log(`network : ${network}`)
        setNetworkType(network)
        // setweb(web3);
        const account = await web3.eth.getAccounts();
        console.log(account[0])
        setAccount(account[0]);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" >Dapp University | Todo List</a>
                            <ul className="navbar-nav px-3">
                                <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                                <small><a className="nav-link" href="#"><span id="account"></span></a></small>
                                </li>
                            </ul>
                        </nav>
                        <Container fluid>
                            <Row>
                                <main role="main" className="col-lg-12 d-flex justify-content-center">
                                {/* { this.state.loading
                                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                                    : <TodoList
                                    tasks={this.state.tasks}
                                    createTask={this.createTask}
                                    toggleCompleted={this.toggleCompleted} />
                                } */}
                                </main>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TodoApp