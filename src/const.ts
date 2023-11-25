export class Info {

    location_province_code: string[] = [
        '11','12','13','14','15',
        '21','22','23',
        '31','32','33','34','35','36','37',
        '41','42','43','44','45','46',
        '50','51','52','53','54',
        '61','62','63','64','65'
    ]
    location_province_word: string[] = [
        '北京市','天津市','河北省','山西省','内蒙古自治区',
        '辽宁省','吉林省','黑龙江省',
        '上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省',
        '河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省',
        '重庆市','四川省','贵州省','云南省','西藏自治区',
        '陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区'
    ]

    source_bussiness_code: string[] = ['100', '101', '120','121','140','141','142','180','181'];
    source_bussiness_word: string[] = [
        '前方地震应急指挥部',
        '后方地震应急指挥部',
        '应急指挥技术系统',
        '社会服务工程应急救援系统',
        '危险区预评估工作组',
        '地震应急指挥技术协调组',
        '震后政府信息支持工作项目组',
        '灾情快速上报接收处理系统',
        '地方地震局应急信息服务相关技术系统',
        '其他'
    ];
    // 业务报送数据编码
    source_sense_code: string[] = ['200','201','202','203','204','205'];
    source_sense_word: string[] = [
        '互联网感知',
        '通信网感知',
        '舆情网感知',
        '电力系统感知',
        '交通系统感知',
        '其他' 
    ]
    // 泛在感知数据编码
    source_else_code: string[] = ['300'];

    // 震情信息
    info_earthquake_code: string[] = ['101'];
    info_earthquake_word: string[] = ['震情信息'];
    // 人员伤亡及失踪
    info_people_code: string[] = ['201','202','203'];
    info_people_word: string[] = ['死亡','受伤','失踪'];
    // 房屋破坏
    info_house_code: string[] = ['301', '302','303','304','305'];
    info_house_word: string[] = ['土木', '砖木','砖混','框架','其他'];
    // 生命线工程灾情
    info_lifeline_code: string[] = ['401','402','403','404','405','406','407'];
    info_lifeline_word: string[] = ['交通','输油','供水','燃气','电力','通信','水利'];
    // 次生灾害信息
    info_secondary_code: string[] = ['501','502','503','504','505','506','507'];
    info_secondary_word: string[] = ['崩塌','滑坡','泥石流','岩溶塌陷','地裂缝','地面沉降',
    '其他（沙土液化、火灾、毒气泄露、爆炸、环境污染、瘟疫、海啸等）'];

    // 地震事件信息
    indicator_earthquake_code: string[] = ['001', '002', '003', '004', '005']
    indicator_earthquake_word: string[] = ['地理位置', '时间','震级','震源深度','烈度']
    // 人员伤亡及失踪信息
    indicator_people_code: string[] = ['001', '002'];
    indicator_people_word: string[] = ['受灾人数','受灾程度'];
    // 房屋破坏信息
    indicator_house_code: string[] = ['001', '002', '003'];
    indicator_house_word: string[] = ['一般损坏面积', '严重损坏面积','受灾程度'];
    // 生命线工程灾情信息
    indicator_lifeline_code: string[] = ['001', '002', '003'];
    indicator_lifeline_word: string[] = ['受灾设施数','受灾范围','受灾程度'];
    // 次生灾害信息
    indicator_secondary_code: string[] = ['001', '002', '003'];
    indicator_secondary_word: string[] = ['灾害损失','灾害范围','受灾程度'];
}