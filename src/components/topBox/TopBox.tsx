
import { useParams } from 'react-router-dom';
import { tableRows } from '../../data';
import "./TopBox.scss"

const TopBox = () => {
    const { id } = useParams(); 
    const keywordId = parseInt(id, 10); 

    const currentKeyword = tableRows.find(keyword => keyword.id === keywordId);

    return (
        <div className="topBox">
            <h1>Keyword</h1>
            {currentKeyword ? (
                <div className="keyword" key={currentKeyword.id}>
                    <span className="keywordTitle">Keyword: {currentKeyword.KeywordSearched}</span>

                    <div className="keywordInfo">                        
                        <span className="summary">Summarry: {currentKeyword.Summary}</span>
                        <span className="tone">Tono: {currentKeyword.Tono}</span>
                        <span className="numMention">times mentioned: {currentKeyword.numMention}</span>
                    </div>
                </div>
            ) : (
                <p>No se encontró información para el ID {keywordId}</p>
            )}
        </div>
    );
};

export default TopBox;