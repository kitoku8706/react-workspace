import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from "../../token/interceptors";

const BoardView = () => {
  const { currentPage, num } = useParams();
  const navigate = useNavigate();
  const [boardDetail, setBoardDetail] = useState({});

  const getBoardDetail = async () => {
    await instance
      .get(`/board/view/${num}`)
      .then((response) => {
        // console.log(response.data);
        setBoardDetail(response.data);
      })
      .catch((error) => console.log("view page 오류 간단하게", error.message));
  };

  //파일 첨부 다운로드
  const handleDownload = async () => {
    await instance
      .get(`/board/contentdownload/${boardDetail.upload}`, {
        responseType: "blob",
      })
      .then((response) => {
        // console.log(response.data);
        const boardFile = response.data;
        const fileName = boardDetail.upload.substring(
          boardDetail.upload.indexOf("_") + 1
        );
        // console.log(fileName);
        const url = window.URL.createObjectURL(new Blob([boardFile]), {
          type: "application/octet-stream",
        });
        // console.log(url);

        const link = document.createElement("a"); // <a href='url' download='fileName' /
        link.href = url;
        link.download = fileName;
        link.style.cssText = "display:none";
        document.body.appendChild(link);
        link.click();
        link.remove();
      })

      .catch((error) => {
        console.log("contenddownload error", error.message);
      });
  };

  // 삭제버튼
  const handleDelete = async (e) => {
    e.preventDefault();
    await instance
      .delete(`/board/delete/${num}`)
      .then((response) => {
        navigate(`/board/list/${currentPage}`);
      })
      .catch((error) => {
        console.log("delete : ", error.message);
      });
  };

  useEffect(() => {
    getBoardDetail();
  }, []);
  return (
    <>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width="20%">글쓴이</th>
            <td>{boardDetail.memberEmail}</td>
          </tr>
          <tr>
            <th width="20%">조회수</th>
            <td>{boardDetail.readCount}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan="3">{boardDetail.subject}</td>
          </tr>
          <tr>
            <th>메일</th>
            <td colSpan="3">{boardDetail.memberEmail}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan="3" style={{ whiteSpace: "pre-line" }}>
              {boardDetail.content}
            </td>
          </tr>
          <tr>
            <th>첨부파일</th>
            <td colSpan="3">
              <button onClick={handleDownload}>
                {boardDetail.upload &&
                  boardDetail.upload.substring(
                    boardDetail.upload.indexOf("_") + 1
                  )}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Link className="btn btn-primary" to={`/board/list/${currentPage}`}>
        리스트
      </Link>
      <Link
        className="btn btn-primary"
        to={`/board/write/${currentPage}/${num}/${boardDetail.ref}/${boardDetail.reStep}/${boardDetail.reLevel}`}
      >
        답변
      </Link>

      {localStorage.getItem("memberEmail") === boardDetail.memberEmail ||
      localStorage.getItem("authRole") === "ADMIN" ? (
        <>
          <Link
            className="btn btn-primary"
            to={`/board/update/${currentPage}/${num}`}
          >
            수정
          </Link>
          <button className="btn btn-primary" onClick={handleDelete}>
            삭제
          </button>
        </>
      ) : null}
    </>
  );
};

export default BoardView;
