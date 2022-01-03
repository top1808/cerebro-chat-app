import {
  Container,
  Row,
  Col,
  Image,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faPlusCircle,
  faPen,
  faEllipsisH,
  faVideo,
  faImages,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import { ChatRoom } from "../components/index";

const INFOS = [
  "Đã học tại trường XYZ",
  "Đang sống tại thành phố HCM",
  "Đên từ thành phố XYZ",
  "Đã kết hôn",
];

const MENUS = ["Bài viết", "Giới thiệu", "Bạn bè", "Ảnh", "Video", "Check in"];

const HomePage = () => {
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isComment, setIsComment] = useState(false);

  const likedColor = isLiked ? "#0472E4" : "";

  const handleInput = (e) => {
    setProgress(e.target.value);
  };

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    setIsComment(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={7}>
          <Row className="position-relative">
            <Image
              src={require("../assets/cover-image.jpeg")}
              className="home__page-cover__image"
            />
            <Image
              src={require("../assets/user.png")}
              className="home__page-avatar"
              roundedCircle
            />
            <Row className="ml-150 mt-20">
              <Col sm={3} className="text-white-color">
                <div className="fw-700 fs-32">Tran Le</div>
                <div>419 Bạn bè</div>
              </Col>
              <Col
                sm={4}
                className="text-center d-flex justify-content-end align-items-center"
              >
                <Button className="fs-14 fw-500 shadow-none">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  &nbsp; Thêm vào tin
                </Button>
              </Col>
              <Col
                sm={5}
                className="text-center d-flex justify-content-end align-items-center"
              >
                <Button
                  variant="secondary"
                  className="fs-14 fw-500 shadow-none"
                >
                  <FontAwesomeIcon icon={faPen} />
                  &nbsp; Chỉnh sửa trang cá nhân
                </Button>
              </Col>
            </Row>
          </Row>
          <div className="line-horizontal mt-40"></div>
          <Row className="mt-20">
            <Col sm={11}>
              {MENUS.map((menu, index) => {
                return (
                  <Button
                    variant="outline-secondary"
                    className="border-0 shadow-none fw-500 text-white-color"
                    key={index}
                  >
                    {menu}
                  </Button>
                );
              })}
            </Col>
            <Col sm={1}>
              <Button variant="secondary shadow-none ">
                <FontAwesomeIcon icon={faEllipsisH} />
              </Button>
            </Col>
          </Row>
          <div className="line-horizontal mt-20"></div>
          <Row className="mt-40">
            <Col sm={4}>
              <Container className="home__page-information__wrap">
                <h5>Giới thiệu</h5>
                {INFOS.map((info, index) => {
                  return (
                    <div key={index} className="home__page-information">
                      {info}
                    </div>
                  );
                })}
                <Button variant="secondary shadow-none w-100 mt-20 fs-14 fw-600">
                  Chỉnh sửa giới thiệu
                </Button>
              </Container>
            </Col>
            <Col sm={8}>
              <Container className="home__page-wall__post">
                <Row>
                  <Col sm={1}>
                    <Image
                      src={require("../assets/user.png")}
                      roundedCircle
                      className="home__page-wall__post-avatar"
                    />
                  </Col>
                  <Col sm={10} className="ms-3">
                    <Button
                      variant="light"
                      style={{ borderRadius: 20, width: "100%", color: "#999" }}
                      className="text-start"
                    >
                      Bạn đang nghĩ gì?
                    </Button>
                  </Col>
                </Row>
                <div className="line-horizontal"></div>
                <Row>
                  <Col sm={4} className="home__page-wall__post-item p-0 mt-2">
                    <Button variant="outline-secondary border-0 shadow-none fs-14 fw-500">
                      <FontAwesomeIcon icon={faVideo} color={'#F4425F'} size="lg"/>
                      &nbsp;
                      Video trực tiếp
                    </Button>
                  </Col>
                  <Col sm={4} className="home__page-wall__post-item p-0 mt-2">
                    <Button variant="outline-secondary border-0 shadow-none fs-14 fw-500">
                      <FontAwesomeIcon icon={faImages} color={'#45BD62'} size="lg"/>
                      &nbsp;
                      Ảnh/Video
                    </Button>
                  </Col>
                  <Col sm={4} className="home__page-wall__post-item p-0 mt-2">
                    <Button variant="outline-secondary border-0 shadow-none fs-14 fw-500">
                      <FontAwesomeIcon icon={faFlag} color={'#39B0D5'} size="lg"/>
                      &nbsp;
                      Sự kiện trong đời
                    </Button>
                  </Col>
                </Row>
              </Container>
              <Container className="home__page-wall__item">
                <Row>
                  <Col sm={1}>
                    <Image
                      src={require("../assets/user.png")}
                      roundedCircle
                      className="home__page-wall__post-avatar"
                    />
                  </Col>
                  <Col sm={10} className="ms-2">
                    <div className="fs-14 fw-600">Tran Le</div>
                    <div className="fs-14 fw-500">1 giờ</div>
                  </Col>
                </Row>
                <div className="mt-2 fs-14 fw-500">
                  {" "}
                  Tôi có nuôi 1 con Vẹt được 3 năm, 3 năm tôi dạy nó nói tiếng
                  người
                </div>
                <Image
                  src={require("../assets/con-vet.jpeg")}
                  rounded
                  className="home__page-wall__item-image"
                />
                <Row>
                  <Col sm={6}>
                    <FontAwesomeIcon icon={faThumbsUp} color={"#0472E4"} />
                    <span className="ms-2 fs-14">14k </span>
                  </Col>
                  <Col sm={6} className="text-end">
                    <span className="fs-14">251 bình luận</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="fs-14">251 lượt chia sẻ</span>
                  </Col>
                </Row>
                <div className="line-horizontal"></div>
                <Row className="mt-2">
                  <Col sm={4} className="text-center">
                    <Button
                      variant="outline-dark shadow-none border-0"
                      onClick={handleLiked}
                    >
                      <FontAwesomeIcon icon={faThumbsUp} color={likedColor} />
                      <span
                        className={
                          isLiked
                            ? "ms-2 fs-14 fw-500 liked-color"
                            : "ms-2 fs-14 fw-500"
                        }
                      >
                        Thích
                      </span>
                    </Button>
                  </Col>
                  <Col sm={4} className="text-center">
                    <Button
                      variant="outline-dark shadow-none border-0"
                      onClick={handleComment}
                    >
                      <FontAwesomeIcon icon={faComment} />
                      <span className="ms-2 fs-14 fw-500 ">Bình luận</span>
                    </Button>
                  </Col>
                  <Col sm={4} className="text-center">
                    <Button variant="outline-dark shadow-none border-0">
                      <FontAwesomeIcon icon={faShare} />
                      <span className="ms-2 fs-14 fw-500">Chia sẻ</span>
                    </Button>
                  </Col>
                </Row>
                <div className="line-horizontal"></div>
                <Row className="mt-4 align-items-center">
                  <Col sm={1}>
                    <Image
                      src={require("../assets/user.png")}
                      roundedCircle
                      className="home__page-wall__post-avatar"
                    />
                  </Col>
                  <Col sm={10} className="ms-3">
                    <FormControl
                      placeholder="Viết bình luận..."
                      style={{ borderRadius: 20, width: "100%" }}
                      className="fs-14 fw-500"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <input
            className="w-100 mt-20"
            value={progress}
            onChange={handleInput}
            type="range"
            step="1"
            min="0"
            max="255"
          />
          <Button className="mb-50">Confirm</Button>
        </Col>
        <Col sm={5}>
          <ChatRoom bot_avatar="https://socialbotapi.cerebro.host/media/avatar.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
