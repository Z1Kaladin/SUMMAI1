
import ChartBox from "../../components/ChartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import InfoTable from "../../components/InformationTable/InfoTable"
import "./home.scss"
import { GridColDef } from "@mui/x-data-grid"
import { tableRows } from "../../data"
import HistoryTable from "../../components/HistoryTable/HistoryTable"


const columns: GridColDef<[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'IDSurvey', headerName: 'IDSurvey', width: 100, editable: false },
  { field: 'Score', headerName: 'Score', width: 100, editable: false },
  { field: 'Hotel', headerName: 'Hotel', width: 150, editable: false },
  { field: 'Country', headerName: 'Country', width: 150, editable: false },
  { field: 'Summary', headerName: 'Summary', width: 300, type: 'number', editable: false },
  { field: 'Tono', headerName: 'Tono', width: 150, editable: false },


];



    
  const columnsHistory: GridColDef<[number]>[] = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'KeywordSearched', headerName: 'Keyword', width: 250, editable: false },


     ];



const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox/></div>
      <div className="box box3"><InfoTable columns={columns} rows={tableRows}/></div>
     <div className="box box4"> 
      <h1>History</h1>
     <HistoryTable slug="Keyword" columns={columnsHistory} rows={tableRows} /></div> 

  
      
    </div>
  )
}

export default Home