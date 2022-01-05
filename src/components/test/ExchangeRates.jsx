import React from 'react';
import {
    useQuery
} from "@apollo/client";
import {EXCHANGE_RATES} from "../../GraphQL/queries";

const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
};

export default ExchangeRates;