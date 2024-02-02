import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [arr, setarr] = useState(['']);
  const [rollno, setrollno] = useState('');
  const [sub1, setsub1] = useState('');
  const [sub2, setsub2] = useState('');
  const [sub3, setsub3] = useState('');
  const [sub4, setsub4] = useState('');
  const [sub5, setsub5] = useState('');
  const [min, setmin] = useState('');
  const [max, setmax] = useState('');
  const [per, setper] = useState('');
  const [result, setresult] = useState(['']);


  var handlesubmit = () => {
    let total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
    let per = total / 5;

    let min = Math.min(sub1, sub2, sub3, sub4, sub5)
    setmin(min);

    let max = Math.max(sub1, sub2, sub3, sub4, sub5)
    setmin(max);

    let temp = 0, res;
    if (parseInt(sub1) > 35) {
      temp += 1;
    }
    if (parseInt(sub2) > 35) {
      temp += 1;
    }
    if (parseInt(sub3) > 35) {
      temp += 1;
    }
    if (parseInt(sub4) > 35) {
      temp += 1;
    }
    if (parseInt(sub5) > 35) {
      temp += 1;
    }

    if (temp == 3 || temp == 4) {
      setresult('ATKT')
      res = 'ATKT';
    }
    else if (temp == 5) {
      setresult('PASS')
      res = 'PASS';
    }
    else {
      setresult('FAIL')
      res = 'FAIL';
    }
    setName("");
    setrollno("");
    setsub1("");
    setsub2("");
    setsub3("");
    setsub4("");
    setsub5("");



    console.log(result)

    setarr([...arr, {
      Name: name, RollNo: rollno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Min: min, Max: max, Res: res
    }])
  }






  return (
    <div className="App">
      Name<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
      Roll No<input type="text" value={rollno} onChange={(e) => setrollno(e.target.value)}></input><br></br>
      sub 1<input type="text" value={sub1} onChange={(e) => setsub1(e.target.value)}></input><br></br>
      sub 2<input type="text" value={sub2} onChange={(e) => setsub2(e.target.value)}></input><br></br>
      sub 3<input type="text" value={sub3} onChange={(e) => setsub3(e.target.value)}></input><br></br>
      sub 4<input type="text" value={sub4} onChange={(e) => setsub4(e.target.value)}></input><br></br>
      sub 5<input type="text" value={sub5} onChange={(e) => setsub5(e.target.value)}></input><br></br><br></br>


      <button type="button" onClick={handlesubmit}>Result</button>

      <table border={2}>
        <tr>
          <td>Name</td>
          <td>Roll No</td>
          <td>sub1</td>
          <td>sub2</td>
          <td>sub3</td>
          <td>sub4</td>
          <td>sub5</td>
          <td>Total</td>
          <td>Min</td>
          <td>Max</td>
          <td>Per</td>
          <td>Result</td>
        </tr>
        {
          arr.map((ele) => {
            return (
              <>
                <tr>
                  <td>{ele.Name}</td>
                  <td>{ele.RollNo}</td>
                  <td>{ele.Sub1}</td>
                  <td>{ele.Sub2}</td>
                  <td>{ele.Sub3}</td>
                  <td>{ele.Sub4}</td>
                  <td>{ele.Sub5}</td>
                  <td>{ele.Total}</td>
                  <td>{ele.Min}</td>
                  <td>{ele.Max}</td>
                  <td>{ele.Per}</td>
                  <td>{ele.Res}</td>
                </tr>
              </>

            )
          })

        }
      </table>

    </div>

  )
}
export default App;