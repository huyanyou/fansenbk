import { Produce } from "./types";

export const producesDt: Produce[] = [
  {
    title: "库房一体化管理系统",
    desc: "这里是库房一体化系统的介绍语句123123123211231231231231231231231231313311231231231231231",
    direction: "left",
  },
  {
    title: "多项指标   全面监测",
    desc: "对PM2.5/PM10、温度、湿度、CO2、甲醛、TVOC等多项环境指标全面监测，将影响我们库房档案安全及管理人员健康的室内外空气质量现状转化为直观可视的数据信息，让库房环境管理有据可依。",
    direction: "left",
  },
  {
    title: "多项指标   全面监测",
    desc: "对PM2.5/PM10、温度、湿度、CO2、甲醛、TVOC等多项环境指标全面监测，将影响我们库房档案安全及管理人员健康的室内外空气质量现状转化为直观可视的数据信息，让库房环境管理有据可依。",
    direction: "right",
  },
  {
    title: "多项指标   全面监测",
    desc: "对PM2.5/PM10、温度、湿度、CO2、甲醛、TVOC等多项环境指标全面监测，将影响我们库房档案安全及管理人员健康的室内外空气质量现状转化为直观可视的数据信息，让库房环境管理有据可依。",
    direction: "left",
  },
  {
    title: "多项指标   全面监测",
    desc: "对PM2.5/PM10、温度、湿度、CO2、甲醛、TVOC等多项环境指标全面监测，将影响我们库房档案安全及管理人员健康的室内外空气质量现状转化为直观可视的数据信息，让库房环境管理有据可依。",
    direction: "right",
  },
];

export enum GuacamoleStatus {
  /**
   * The Guacamole connection has not yet been attempted.
   *
   * @type String
   */
  IDLE = "IDLE",

  /**
   * The Guacamole connection is being established.
   *
   * @type String
   */
  CONNECTING = "CONNECTING",

  /**
   * The Guacamole connection has been successfully established, and the
   * client is now waiting for receipt of initial graphical data.
   *
   * @type String
   */
  WAITING = "WAITING",

  /**
   * The Guacamole connection has been successfully established, and
   * initial graphical data has been received.
   *
   * @type String
   */
  CONNECTED = "CONNECTED",

  /**
   * The Guacamole connection has terminated successfully. No errors are
   * indicated.
   *
   * @type String
   */
  DISCONNECTED = "DISCONNECTED",

  /**
   * The Guacamole connection has terminated due to an error reported by
   * the client. The associated error code is stored in statusCode.
   *
   * @type String
   */
  CLIENT_ERROR = "CLIENT_ERROR",

  /**
   * The Guacamole connection has terminated due to an error reported by
   * the tunnel. The associated error code is stored in statusCode.
   *
   * @type String
   */
  TUNNEL_ERROR = "TUNNEL_ERROR",
}
