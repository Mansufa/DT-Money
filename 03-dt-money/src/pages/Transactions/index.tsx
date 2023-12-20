import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant= 'income'>
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/12/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Pizza</td>
                            <td>
                                <PriceHighlight variant= 'outcome'>
                                    - R$ 120,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>11/12/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Batata</td>
                            <td>
                                <PriceHighlight variant= 'outcome'>
                                    - R$ 12,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>11/12/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Placa de Pare</td>
                            <td>
                                <PriceHighlight variant= 'outcome'>
                                    - R$ 130,00
                                </PriceHighlight>
                            </td>
                            <td>Gasto</td>
                            <td>10/12/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}