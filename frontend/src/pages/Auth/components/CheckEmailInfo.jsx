import React, { useEffect, useState } from "react";
import { Result, Button, Spin } from "antd";

import { userApi } from "../../../utils/api";
import { Block } from "../../../components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "Аккаунт успешно подтвержден!"
      };
    } else {
      return {
        status: "loading",
        message: "Загрузка..."
      };
    }
  } else {
    return {
      status: "success",
      message: "Ссылка с подтверждением аккаунта отправлена на E-Mail."
    };
  }
};

const CheckEmailInfo = ({ location, history }, props) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1]; // из url достаём hash "http://localhost:3000/register/verify?hash=$2b$10$jZiwNqv2cCtznSfemPw//OyyRtOD.na48yvJZtEKvVLvxBMcBPuDW"
  const info = renderTextInfo(hash, verified);

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  }, []);

  return (
    <div>
      <Block>
        {info.status === "loading" ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Spin size="large" tip={info.message}/>
          </div>
        ) : (
          <Result
            status={info.status}
            title={info.status === "success" ? "Готово!" : "Ошибка"}
            subTitle={info.message}
            extra={
              info.status === "success" &&
              verified && (
                <Button type="primary" onClick={() => history.push("/login")}>
                  Войти
                </Button>
              )
            }
          />
        )}
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
