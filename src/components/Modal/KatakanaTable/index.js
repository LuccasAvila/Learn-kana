import React from 'react';
import { Container, Title, Table } from './styles';

const KatakanaTable = () => {
  return (
    <Container>
      <Title>Katakana</Title>
      <Title>(カタカナ)</Title>
      <Table>
        <thead>
          <tr>
            <th>n</th>
            <th>w-</th>
            <th>r-</th>
            <th>y-</th>
            <th>m-</th>
            <th>h-</th>
            <th>n-</th>
            <th>t-</th>
            <th>s-</th>
            <th>k-</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ン</td>
            <td>ワ</td>
            <td>ラ</td>
            <td>ヤ</td>
            <td>マ</td>
            <td>ハ</td>
            <td>ナ</td>
            <td>タ</td>
            <td>サ</td>
            <td>カ</td>
            <td>ア</td>
            <td>
              <strong>a</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>リ</td>
            <td></td>
            <td>ミ</td>
            <td>ヒ</td>
            <td>ニ</td>
            <td>チ</td>
            <td>シ</td>
            <td>キ</td>
            <td>イ</td>
            <td>
              <strong>i</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>ル</td>
            <td>ユ</td>
            <td>ム</td>
            <td>フ</td>
            <td>ヌ</td>
            <td>ツ</td>
            <td>ス</td>
            <td>ク</td>
            <td>ウ</td>
            <td>
              <strong>u</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>レ</td>
            <td></td>
            <td>メ</td>
            <td>へ</td>
            <td>ネ</td>
            <td>テ</td>
            <td>セ</td>
            <td>ケ</td>
            <td>エ</td>
            <td>
              <strong>e</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>ロ</td>
            <td>ヨ</td>
            <td>モ</td>
            <td>ホ</td>
            <td>ノ</td>
            <td>ト</td>
            <td>ソ</td>
            <td>コ</td>
            <td>オ</td>
            <td>
              <strong>o</strong>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default KatakanaTable;
