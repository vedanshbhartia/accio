pragma solidity ^0.4.17;

import "./Ownable.sol";

contract create is Ownable{
    struct Transaction {
        address sender;
        address courier;
        uint transaction_id;
        uint courier_eth;
        uint sender_eth;
        bool sender_paid;
        bool courier_paid;
    }

    event transaction_created(uint transactionId);

    Transaction[] public transactions;

    function createTransaction (address sender, address courier, uint transaction_id, uint courier_eth, uint sender_eth) onlyOwner{
        uint transactionReference = transactions.push(Transaction(sender, courier, transaction_id, courier_eth, sender_eth, false, false))-1;
        emit transaction_created(transactionReference);
    }
    }