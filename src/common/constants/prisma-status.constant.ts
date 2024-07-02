export enum PrismaStatusEnum {
    // Database Errors
    DatabaseConnectionError = 'P1000',
    DatabaseTimeoutError = 'P1001',
    DatabaseAuthenticationError = 'P1002',
    DatabasePermissionError = 'P1003',
    DatabaseAlreadyExists = 'P1004',
    DatabaseDoesNotExist = 'P1005',
    DatabaseInvalidURL = 'P1006',
    DatabaseMigrationError = 'P1007',
    DatabaseUnknownError = 'P1008',
    UniqueConstraintViolation = 'P2002',
    ForeignKeyConstraintViolation = 'P2003',
    ReadOnlyFieldViolation = 'P2004',
    InvalidRecordIdInRelationalField = 'P2005',
    RecordDoesNotExist = 'P2006',
    RelationFieldMissing = 'P2009',
    InsufficientPrivilegeError = 'P2010',
    MissingRequiredArgument = 'P2011',
    ArgumentValueOutOfRange = 'P2012',
    ArgumentValueTooBig = 'P2013',
    QueryArgumentError = 'P2018',
    InvalidRecordId = 'P2021',
    RecordNotFound = 'P2025',
    ConstraintNotSatisfied = 'P2027',
    FieldUndefinedInModel = 'P2028',
    TransactionError = 'P2029',
    UnknownTransactionError = 'P2030',
    ValueTooLong = 'P2200',
    DecimalOverflow = 'P2201',
    JsonParsingFailure = 'P2202',
    InvalidJson = 'P2203',
    UnsupportedJsonValue = 'P2204',
    InvalidDateTimeFormat = 'P2205',
    DivisionByZero = 'P2206',
    InvalidFloatOperation = 'P2207',
    InvalidGeoInput = 'P2208',
    InvalidRecordJson = 'P2209',
    InvalidRecordEnumValue = 'P2210',
    QueryCancellationWasRequested = 'P2300',
    SerializationFailure = 'P2301',
    TimeoutError = 'P2302',
    QueryExecutionError = 'P2303',
    QueryProtocolError = 'P2304',
    ClientRequestError = 'P2310',
    ClientNetworkError = 'P2311',
    ClientUnknownRequestError = 'P2312',
    ClientConnectionAcquireTimeoutError = 'P2313',
    ClientConnectionInitializationError = 'P2314',
    ClientConnectionClosedError = 'P2315',
    ClientConnectionEnqueueTimeoutError = 'P2316',
    ClientConnectionPoolAcquireTimeoutError = 'P2317',
}

export const PrismaStatusMessages = {
    [PrismaStatusEnum.DatabaseAlreadyExists]: '数据库已存在，请选择其他名称或删除现有数据库。',
    [PrismaStatusEnum.DatabaseDoesNotExist]: '指定的数据库不存在，请检查数据库名称是否正确。',
    [PrismaStatusEnum.DatabaseInvalidURL]: '数据库URL格式不正确，请检查连接字符串。',
    [PrismaStatusEnum.DatabaseUnknownError]: '发生了未知的数据库错误，请检查数据库日志。',
    [PrismaStatusEnum.DatabaseMigrationError]: '执行数据库迁移时出错，请检查迁移脚本是否有误。',
    [PrismaStatusEnum.ReadOnlyFieldViolation]: '试图修改只读字段，请检查您的更新操作。',
    [PrismaStatusEnum.InvalidRecordIdInRelationalField]: '关联字段中包含的记录ID无效，请提供正确的ID。',
    [PrismaStatusEnum.RecordDoesNotExist]: '尝试操作的记录不存在，请检查查询条件或数据完整性。',
    [PrismaStatusEnum.InsufficientPrivilegeError]: '当前用户权限不足，无法执行该操作，请联系管理员提升权限。',
    [PrismaStatusEnum.MissingRequiredArgument]: '缺少必要的参数，请检查查询以确保所有必需参数都已提供。',
    [PrismaStatusEnum.ArgumentValueOutOfRange]: '参数值超出允许范围，请检查并提供有效值。',
    [PrismaStatusEnum.ArgumentValueTooBig]: '参数值过大，超过数据库字段限制，请减小值的大小。',
    [PrismaStatusEnum.ConstraintNotSatisfied]: '插入或更新的数据不满足数据库约束条件，请检查数据模型和约束定义。',
    [PrismaStatusEnum.FieldUndefinedInModel]: '尝试访问的字段在模型中未定义，请检查字段名称是否正确或模型定义是否完整。',
    [PrismaStatusEnum.TransactionError]: '事务执行过程中发生错误，请检查事务逻辑或数据库状态。',
    [PrismaStatusEnum.UnknownTransactionError]: '发生了未知的事务错误，请检查事务管理代码或数据库日志。',
    [PrismaStatusEnum.DecimalOverflow]: '数值运算导致溢出，请检查数值类型和运算逻辑。',
    [PrismaStatusEnum.JsonParsingFailure]: 'JSON解析失败，请确保提供的JSON格式正确无误。',
    [PrismaStatusEnum.InvalidJson]: '提供的JSON数据格式不合法，请检查数据结构和格式化。',
    [PrismaStatusEnum.UnsupportedJsonValue]: '提供的JSON值不受支持，请检查值类型是否符合预期。',
    [PrismaStatusEnum.InvalidDateTimeFormat]: '日期时间格式不正确，请使用正确的格式化字符串。',
    [PrismaStatusEnum.DivisionByZero]: '尝试除以零，请避免此类运算或添加检查逻辑。',
    [PrismaStatusEnum.InvalidFloatOperation]: '浮点数运算错误，请检查数值和运算逻辑。',
    [PrismaStatusEnum.InvalidGeoInput]: '地理空间数据输入不合法，请检查坐标或几何对象格式。',
    [PrismaStatusEnum.InvalidRecordJson]: '记录中的JSON数据格式错误，请检查并修正JSON数据。',
    [PrismaStatusEnum.InvalidRecordEnumValue]: '记录中枚举字段的值无效，请使用枚举中定义的值。',
    [PrismaStatusEnum.QueryCancellationWasRequested]: '查询已被取消，可能是因为超时或其他取消请求。',
    [PrismaStatusEnum.SerializationFailure]: '数据序列化失败，请检查数据结构是否复杂或存在循环引用。',
    [PrismaStatusEnum.TimeoutError]: '数据库操作超时，请检查查询性能或调整超时设置。',
    [PrismaStatusEnum.QueryExecutionError]: '执行查询时发生错误，请检查查询逻辑或数据库状态。',
    [PrismaStatusEnum.QueryProtocolError]: '查询协议错误，可能是因为数据库驱动程序或网络问题。',
    [PrismaStatusEnum.ClientRequestError]: '客户端请求发送失败，请检查网络连接或服务端状态。',
    [PrismaStatusEnum.ClientNetworkError]: '网络通信错误，请检查网络连接状况。',
    [PrismaStatusEnum.ClientUnknownRequestError]: '未知的客户端请求错误，请检查请求构造是否正确。',
    [PrismaStatusEnum.ClientConnectionAcquireTimeoutError]: '获取数据库连接超时，请检查数据库连接池配置或数据库负载。',
    [PrismaStatusEnum.ClientConnectionInitializationError]: '数据库连接初始化失败，请检查数据库连接配置或服务状态。',
    [PrismaStatusEnum.ClientConnectionClosedError]: '数据库连接在操作过程中意外关闭，可能是因为数据库服务器问题或网络不稳定，请检查相关设置或重试操作。',
    [PrismaStatusEnum.ClientConnectionEnqueueTimeoutError]: '等待队列中获取数据库连接超时，这意味着连接池中的所有连接都在使用且达到了最大等待时间，请考虑增加连接池大小或优化数据库操作以减少连接占用时间。',
    [PrismaStatusEnum.ClientConnectionPoolAcquireTimeoutError]: '从连接池中获取数据库连接超时，表明在指定时间内没有可用连接，建议检查连接是否正常释放、增加连接池容量或优化数据库访问频次以减轻负载。'
}