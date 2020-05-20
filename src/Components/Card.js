import React from "react";
import styled from "styled-components";
import theme from "./theme";

const CardWrapper = styled.svg`
  .a {
    fill: #fff;
    stroke: #000;
  }

  .b,
  .c {
    fill: #c7b299;
  }

  .b {
    opacity: 0.54;
  }

  .c {
    opacity: 0.52;
  }

  .d {
    fill: #4d4d4d;
  }

  .e {
    font-size: 20px;
  }

  .e,
  .f {
    font-family: ${theme.font.family};
  }

  .f {
    font-size: 10px;
  }

  .g {
    stroke: none;
  }

  .h {
    fill: none;
  }
`;

const CardText = ({ text }) => {
  let textArray = (text + "").split("\n");

  const Tspan = ({ line, text }) => (
    <tspan font-family="'KoPub Batang', serif" key={line} x="0" y={(line - 1) * 31}>
      {text}
    </tspan>
  );

  const DefaultTspan = (
    <>
      <tspan x="0" y="0">
        글을 입력하면
      </tspan>
      <tspan x="0" y="31">
        이 부분에 내용이
      </tspan>
      <tspan x="0" y="62">
        보입니다.
      </tspan>
    </>
  );

  if (typeof text === "undefined") return DefaultTspan;
  else
    return (
      <>
        {textArray.map((text, index) => {
          if (index < 5) {
            return <Tspan line={index + 1} text={text} />;
          } else {
            alert("5줄 안으로만 쓸 수 있습니다.");
            return null;
          }
        })}
      </>
    );
};

const Card = (props) => (
  <CardWrapper
    xmlns="http://www.w3.org/2000/svg"
    width="251"
    height="357.266"
    viewBox="0 0 251 357.266"
    id="bommy-card"
  >
    <g transform="translate(-62 -206)">
      <g className="a" transform="translate(62 206)">
        <rect className="g" width="251" height="357" />
        <rect className="h" x="0.5" y="0.5" width="250" height="356" />
      </g>
      <g transform="translate(146 417.136)">
        <path
          className="b"
          d="M129.791,32.907a109.2,109.2,0,0,1-19.832,29.376A109.731,109.731,0,0,1,73.19,87.795q1.072-6.867,2.145-13.72c5.077-8.751,9.316-11.588,12.432-12.438.552-.146,3.858-1,3.858-2.139,0-.907-2.043-1.269-2.024-2.17,0-1.269,4.081-1.269,4.6-2.976.673-2.227-5.286-5.255-4.671-6.746s6.917.742,8.123-1.51c.635-1.231-.171-2.976-.958-4.227l10.37-26.108,13.746,17.566Z"
          transform="translate(-38.002 -15.76)"
        />
        <path
          className="c"
          d="M168.517,38.094c-1.269,2.538-12.058,25.7-.432,45.019,6.879,11.423,18.436,16.259,25.727,19.3a70.385,70.385,0,0,0,31.731,5.147c-1.859-1.409-3.712-3.141-3.313-4.353.635-1.828,5.946-1.231,6.124-2.4.14-.9-2.976-1.847-5.382-3.11-2.919-1.536-6.53-4.442-9.608-10.458a41.281,41.281,0,0,0,12.61-29q-.47-13.555-.927-27.123L191.413,47.1Z"
          transform="translate(-70.724 -21.372)"
        />
        <path
          d="M110.5,43.134A84.848,84.848,0,0,0,121,19.094l-1.587.419a57.819,57.819,0,0,1,13.549,15.072c.635,1.041,2.291.089,1.644-.958a59.184,59.184,0,0,0-13.847-15.459.971.971,0,0,0-1.593.419,83.261,83.261,0,0,1-10.312,23.582c-.635,1.041.984,1.993,1.644.965Z"
          transform="translate(-50.981 -16.543)"
        />
        <path
          d="M149.883,43.764a41.205,41.205,0,0,1,32.759,6.873c1,.717,1.948-.933.965-1.644a43.427,43.427,0,0,0-26.349-8,42.741,42.741,0,0,0-7.882.958c-1.2.26-.692,2.1.508,1.84Z"
          transform="translate(-65.589 -24.973)"
        />
        <path
          d="M207.639,47.466a220.215,220.215,0,0,0,33.876-16.075l-1.4-.571a47.342,47.342,0,0,1,.19,23.658.951.951,0,0,0,1.834.5,49.334,49.334,0,0,0-.19-24.661.965.965,0,0,0-1.4-.571,217.673,217.673,0,0,1-33.419,15.865c-1.136.425-.635,2.266.508,1.834Z"
          transform="translate(-86.708 -20.825)"
        />
        <path
          d="M253.02,76.062a39.53,39.53,0,0,1-11.734,26.6c-.876.857.47,2.2,1.345,1.345a41.466,41.466,0,0,0,12.292-27.923c.044-1.225-1.859-1.225-1.9,0Z"
          transform="translate(-99.318 -37.465)"
        />
        <path
          d="M225.861,58.186a1.269,1.269,0,0,0,.857.635,1.656,1.656,0,0,0,.552-.146c.451-.146.895-.324,1.345-.482l2.538-.914,5.077-1.821-1.073-1.4-2.634,5.8c-.222.482-.1,1.307.565,1.4l4.328.59L237,60.249l-3.382,3.7a.965.965,0,0,0,.673,1.625h2.843l-.819-1.428-1.561,2.583a.958.958,0,0,0,.819,1.434l1.771-.044-.825-1.434a36.808,36.808,0,0,0-6,15.37c-.178,1.2,1.656,1.713,1.834.508a35.538,35.538,0,0,1,5.813-14.913.958.958,0,0,0-.819-1.434l-1.771.044.825,1.434,1.561-2.589a.965.965,0,0,0-.825-1.434h-2.843l.673,1.631,3.382-3.706c.425-.463.343-1.485-.419-1.593l-4.328-.584.571,1.4L236.8,55.02c.311-.679-.216-1.713-1.073-1.4l-4.772,1.72-2.088.755-1.193.425-.6.216c-.3,0-.381.07-.222.165-.3.083-.565-.038-.876.133a1.358,1.358,0,0,0-.539.565,1.269,1.269,0,0,0,.2,1.428,1.291,1.291,0,0,0,2.082-1.352c-.406-1.187-2.24-.635-1.84.508Z"
          transform="translate(-93.583 -29.572)"
        />
        <path
          d="M106.76,61.944a11.3,11.3,0,0,0-8.885,1.6.965.965,0,0,0,0,1.644,9.646,9.646,0,0,1,4.315,7.615c.044,1.218,1.948,1.225,1.9,0a11.645,11.645,0,0,0-5.229-9.259v1.644a9.373,9.373,0,0,1,7.387-1.415c1.193.279,1.7-1.561.508-1.834Z"
          transform="translate(-46.854 -32.524)"
        />
        <path
          d="M102.636,75.185l-4.595,3a.965.965,0,0,0-.19,1.472l2.024,2.17a.952.952,0,1,0,1.345-1.345L99.2,78.314l-.19,1.5,4.595-2.983a.952.952,0,1,0-.958-1.644Z"
          transform="translate(-46.918 -37.419)"
        />
        <path
          d="M89.441,83.823a34.561,34.561,0,0,0-17.217,21.221.952.952,0,0,0,1.834.508A32.644,32.644,0,0,1,90.406,85.467C91.491,84.9,90.533,83.258,89.441,83.823Z"
          transform="translate(-37.639 -40.587)"
        />
        <path
          d="M238.469,125.217a67,67,0,0,0,12.8,10.192l.228-1.739-6.13,2.4c-.6.235-1.022,1.079-.419,1.587l4.988,4.195.927-1.593a13.327,13.327,0,0,0-5.5.228.965.965,0,0,0-.228,1.739,9.037,9.037,0,0,1,3.808,4.131l1.079-1.4-3.522-1.269a.958.958,0,0,0-.927,1.593,14.875,14.875,0,0,1,5.217,12.9l1.434-.819a25.867,25.867,0,0,0-24.966-2.132c-1.117.5-.146,2.145.965,1.644a23.938,23.938,0,0,1,23.036,2.132.965.965,0,0,0,1.434-.825,16.639,16.639,0,0,0-5.775-14.247l-.927,1.593,3.522,1.238c.857.3,1.4-.711,1.073-1.4a10.788,10.788,0,0,0-4.518-4.817l-.228,1.739a10.789,10.789,0,0,1,4.487-.222c.831.133,1.739-.914.927-1.593l-4.988-4.195-.419,1.593,6.124-2.4a.965.965,0,0,0,.228-1.739,65.029,65.029,0,0,1-12.413-9.894c-.857-.876-2.2.47-1.345,1.345Z"
          transform="translate(-94.114 -55.149)"
        />
        <path
          d="M140.858,111.452a80.761,80.761,0,0,1,29.11-2.012c1.218.133,1.206-1.771,0-1.9a82.144,82.144,0,0,0-29.617,2.082A.952.952,0,0,0,140.858,111.452Z"
          transform="translate(-62.294 -49.107)"
        />
        <path
          d="M108.31,117.493l-7.571,3.421a.952.952,0,0,0-.336,1.269l3.808,5.534a.977.977,0,0,0,1.269.343l8.885-4.309a.971.971,0,0,0,.343-1.269,14.33,14.33,0,0,0-3.928-5.217c-.939-.781-2.291.558-1.345,1.345a13.1,13.1,0,0,1,3.63,4.829l.343-1.269-8.885,4.309,1.307.343-3.808-5.534-.343,1.269,7.577-3.421a.953.953,0,0,0-.965-1.644Z"
          transform="translate(-47.902 -52.762)"
        />
        <path
          d="M104.433,133.012l-.076-.793c-.114-1.193-1.9-1.269-1.9,0a12.984,12.984,0,0,1-8.5,12.153c-1.155.4-.635,2.24.5,1.834a14.926,14.926,0,0,0,9.9-13.961h-1.9l.076.793c.121,1.212,2.024,1.225,1.9,0Z"
          transform="translate(-45.352 -57.975)"
        />
        <path
          d="M105.746,145.638a37.067,37.067,0,0,0,31.616,9.982,34.415,34.415,0,0,0,9.278-2.856c1.111-.52.146-2.164-.958-1.644a35.149,35.149,0,0,1-31.21-1.269,32.759,32.759,0,0,1-7.393-5.559.952.952,0,0,0-1.345,1.345Z"
          transform="translate(-49.799 -62.631)"
        />
        <path
          d="M211.4,180.082a6.346,6.346,0,0,1-7.939,6.187c-.73-.19-1.612.7-1.079,1.4.781,1.009,1.9,2.418,1.707,3.808s-1.593,1.587-2.691,1.548c-2.773-.1-5.375-1.9-8.085-.362a.952.952,0,0,0,.952,1.612c1.5-.863,3.325-.133,4.867.273a7.5,7.5,0,0,0,4.341.07,3.649,3.649,0,0,0,2.538-3.268c.1-1.726-.965-3.351-1.974-4.664l-1.072,1.4a8.25,8.25,0,0,0,10.338-8.009.952.952,0,1,0-1.9,0Z"
          transform="translate(-81.774 -75.453)"
        />
        <path
          d="M218.183,195.168l-1.174-.279-.254,1.866,19.635-1.269-.673-1.631-11.315,9.6a.966.966,0,0,0,.673,1.625,31.2,31.2,0,0,1,10.592,2.037l-.228-1.745-10.611,4.874a.961.961,0,0,0,.482,1.777c3.808-.267,8.383-.584,11.277,2.437,3.033,3.173.869,7.73-.825,10.972-.565,1.085,1.079,2.05,1.644.958,2.075-3.96,4.15-9.012.838-12.933-3.173-3.757-8.472-3.649-12.933-3.338l.482,1.771,10.63-4.848c.825-.374.457-1.479-.228-1.739a32.816,32.816,0,0,0-11.093-2.1l.673,1.625,11.315-9.6a.958.958,0,0,0-.673-1.625l-19.635,1.269a.977.977,0,0,0-.254,1.9l1.18.279c1.187.286,1.694-1.555.5-1.834Z"
          transform="translate(-90.126 -80.74)"
        />
        <path
          d="M74.047,166.172a108.037,108.037,0,0,0,51.4,13.111A106.149,106.149,0,0,0,140.4,178.23c1.206-.165.692-2-.508-1.834a105.98,105.98,0,0,1-51.48-5.712,102.807,102.807,0,0,1-13.422-6.137c-1.079-.59-2.037,1.053-.958,1.644Z"
          transform="translate(-38.135 -70.079)"
        />
        <path
          d="M63.464,128.753a44.7,44.7,0,0,1-8.06,9.589.958.958,0,0,0,.673,1.625c1.4-.038,3.421-.146,4.309,1.187,1.1,1.656-1.333,2.6-2.367,3.408-1.269,1-1.752,2.824-.3,3.96,1.187.933,2.97.635,4.284.165l-.927-1.593a19.228,19.228,0,0,0-2.926,5.3c-.425,1.149,1.415,1.65,1.834.508a16.4,16.4,0,0,1,2.437-4.442c.514-.635.082-1.948-.927-1.587a4.925,4.925,0,0,1-1.936.362c-.451-.032-1.085-.254-.762-.8s1.085-.812,1.555-1.136a5.82,5.82,0,0,0,1.859-1.809A3.5,3.5,0,0,0,60.856,139a7.8,7.8,0,0,0-4.779-.92l.673,1.625a46.492,46.492,0,0,0,8.358-9.976c.635-1.041-1-2-1.644-.958Z"
          transform="translate(-31.405 -56.889)"
        />
        <path
          d="M71.535,117.582l-1.269,5.147a.952.952,0,1,0,1.834.508l1.269-5.147a.952.952,0,1,0-1.834-.508Z"
          transform="translate(-36.918 -52.7)"
        />
        <path
          d="M246.474,176.186a44.531,44.531,0,0,0,12.851,22.338c.888.838,2.24-.5,1.345-1.345a42.7,42.7,0,0,1-12.362-21.5C248.035,174.485,246.2,174.993,246.474,176.186Z"
          transform="translate(-101.308 -73.944)"
        />
        <path
          d="M93.341,98.079l8.447,5.762a.958.958,0,0,0,1.269-.336.971.971,0,0,0-.336-1.307L94.3,96.435a.952.952,0,1,0-.958,1.644Z"
          transform="translate(-45.181 -45.184)"
        />
        <path
          className="d"
          d="M204.028,22.7c1.028.083,1.149,1.675,1.206,2.45.1,1.269.159,2.538.2,3.808q.133,3.877,0,7.749a105.871,105.871,0,0,1-1.745,15.561q-.819,4.328-1.986,8.58a.476.476,0,0,0,.914.254,107.4,107.4,0,0,0,3.712-33.831c-.083-1.713.165-5.318-2.285-5.521-.635-.057-.635.895,0,.952Z"
          transform="translate(-84.957 -17.947)"
        />
        <path
          className="d"
          d="M213.054,72.475a69.389,69.389,0,0,0,7.26-30.639.476.476,0,1,0-.952,0,68.215,68.215,0,0,1-7.133,30.157c-.273.546.552,1.028.825.482Z"
          transform="translate(-88.785 -25.114)"
        />
        <path
          className="d"
          d="M221.907,87.452a96.018,96.018,0,0,1,14.482-12.787c.495-.355,0-1.18-.482-.825a97.42,97.42,0,0,0-14.672,12.94c-.419.451.254,1.123.673.673Z"
          transform="translate(-92.047 -36.95)"
        />
        <path
          className="d"
          d="M101.3,54.519q-3.884-6.346-7.26-13.029-1.726-3.389-3.3-6.854c-.9-1.98-1.713-4.017-2.748-5.94a12.692,12.692,0,0,0-4.246-4.88c-.52-.33-1,.495-.482.825a13.514,13.514,0,0,1,4.62,5.953c1.269,2.659,2.405,5.382,3.681,8.034q4.049,8.4,8.885,16.367c.324.527,1.142.044.825-.476Z"
          transform="translate(-41.602 -18.676)"
        />
        <path
          className="d"
          d="M95.216,74.706q-12.692-8.25-24.579-17.769c-.476-.374-1.155.292-.673.673Q81.9,67.185,94.715,75.543c.514.336,1-.489.482-.819Z"
          transform="translate(-36.763 -30.765)"
        />
        <path
          className="d"
          d="M125.393,135.684a16.965,16.965,0,0,1,7.279-1.783c2.792-.209,5.585-.393,8.383-.584l17.039-1.2,9.779-.666c.635-.038.635-.99,0-.952-11.69.819-23.385,1.593-35.069,2.462a18.373,18.373,0,0,0-7.888,1.9.476.476,0,0,0,.476.819Z"
          transform="translate(-56.831 -57.684)"
        />
        <path
          className="d"
          d="M128.993,145.09l38.2,3.96c.635.063.635-.888,0-.952l-38.2-3.96C128.358,144.075,128.39,145.027,128.993,145.09Z"
          transform="translate(-58.222 -62.667)"
        />
        <path
          className="d"
          d="M52.054,126.846a66.146,66.146,0,0,1,27.219,1.809.477.477,0,1,0,.254-.92,67.351,67.351,0,0,0-27.733-1.809c-.635.089-.349,1.009.247.92Z"
          transform="translate(-30.053 -55.763)"
        />
        <path
          className="d"
          d="M41.833,147.212a92.9,92.9,0,0,1,33.838-7.26.476.476,0,1,0,0-.952,93.707,93.707,0,0,0-34.091,7.292c-.558.235-.311,1.155.254.92Z"
          transform="translate(-26.337 -60.79)"
        />
        <path
          d="M44.667,170.519a49.563,49.563,0,0,0-22.738,18.15,47.07,47.07,0,0,0-4.093,7.3c-.5,1.1,1.142,2.075,1.644.958A47.6,47.6,0,0,1,38.01,175.926a45.649,45.649,0,0,1,7.184-3.573c1.13-.444.635-2.285-.5-1.834Z"
          transform="translate(-17.742 -72.281)"
        />
      </g>
      <text className="e" transform="translate(82 249)">
        <CardText text={props.text} />
      </text>
      <text className="f" transform="translate(209 550)">
        <tspan x="0" y="0">
          @cat_bommy
        </tspan>
      </text>
    </g>
  </CardWrapper>
);

export default Card;
