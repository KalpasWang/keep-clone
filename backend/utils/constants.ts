export const SALT_ROUNDS = 11;

// 1xx 資訊回應
export const HTTP_CONTINUE = 100; // 繼續，請求者應繼續執行請求
export const HTTP_SWITCHING_PROTOCOLS = 101; // 切換協議，請求者請求切換協議
export const HTTP_PROCESSING = 102; // 處理中，服務器正在處理請求（WebDAV）

// 2xx 成功回應
export const HTTP_OK = 200; // 正常，請求已成功
export const HTTP_CREATED = 201; // 已建立，請求已經被實現，並創建了一個新的資源
export const HTTP_ACCEPTED = 202; // 已接受，請求已經被接受，但還未被執行
export const HTTP_NON_AUTHORITATIVE_INFORMATION = 203; // 非授權資訊，請求成功，但返回的資訊可能不是最新的
export const HTTP_NO_CONTENT = 204; // 無內容，請求已成功，但沒有返回任何內容
export const HTTP_RESET_CONTENT = 205; // 重置內容，請求已成功，請求者應重置顯示的資料
export const HTTP_PARTIAL_CONTENT = 206; // 部分內容，請求成功，但只返回部分資源
export const HTTP_MULTI_STATUS = 207; // 多狀態，WebDAV 請求已成功，但可能返回多個狀態值
export const HTTP_ALREADY_REPORTED = 208; // 已報告，WebDAV 請求已成功，且已經報告相應的狀態
export const HTTP_IM_USED = 226; // 使用中，服務器已經完成請求，用於表示對實例的一系列操作

// 3xx 重新導向
export const HTTP_MULTIPLE_CHOICES = 300; // 多種選擇，請求的資源有多個表示形式
export const HTTP_MOVED_PERMANENTLY = 301; // 永久移動，請求的資源已永久移動到新位置
export const HTTP_FOUND = 302; // 找到，請求的資源暫時移到其他位置
export const HTTP_SEE_OTHER = 303; // 查看其他位置，請求的資源存在另一個 URI，應使用 GET 請求取得
export const HTTP_NOT_MODIFIED = 304; // 未修改，請求的資源未修改，可使用緩存版本
export const HTTP_USE_PROXY = 305; // 使用代理，請求的資源必須透過代理存取
export const HTTP_RESERVED = 306; // 保留，此狀態碼已被保留，未來可能使用
export const HTTP_TEMPORARY_REDIRECT = 307; // 暫時重新導向，請求的資源暫時移到其他位置，請保持請求方法和內容
export const HTTP_PERMANENTLY_REDIRECT = 308; // 永久重新導向，請求的資源已永久移到新位置

// 4xx 用戶端錯誤
export const HTTP_BAD_REQUEST = 400; // 錯誤請求，請求無效或不合法
export const HTTP_UNAUTHORIZED = 401; // 未授權，未提供認證信息或認證無效
export const HTTP_PAYMENT_REQUIRED = 402; // 需要付款，保留作為將來使用
export const HTTP_FORBIDDEN = 403; // 禁止，請求被拒絕，無權訪問
export const HTTP_NOT_FOUND = 404; // 找不到，請求的資源不存在
export const HTTP_METHOD_NOT_ALLOWED = 405; // 方法不允許，請求方法不被允許
export const HTTP_NOT_ACCEPTABLE = 406; // 不可接受，服務器無法根據客戶端請求的內容特性完成請求
export const HTTP_PROXY_AUTHENTICATION_REQUIRED = 407; // 需要代理認證，要求使用代理身份驗證
export const HTTP_REQUEST_TIMEOUT = 408; // 請求超時，伺服器等待請求的時間過長
export const HTTP_CONFLICT = 409; // 衝突，請求衝突，無法執行
export const HTTP_GONE = 410; // 消失，請求的資源不再可用
export const HTTP_LENGTH_REQUIRED = 411; // 需要長度，未指定 Content-Length
export const HTTP_PRECONDITION_FAILED = 412; // 前提條件失敗，請求中的條件未滿足
export const HTTP_REQUEST_ENTITY_TOO_LARGE = 413; // 請求實體過大，請求內容過大
export const HTTP_REQUEST_URI_TOO_LONG = 414; // 請求 URI 過長，請求的 URI 長度超過伺服器處理能力
export const HTTP_UNSUPPORTED_MEDIA_TYPE = 415; // 不支援的媒體類型，不支援請求中的媒體類型
export const HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416; // 請求的範圍不滿足，無法滿足請求中的範圍條件
export const HTTP_EXPECTATION_FAILED = 417; // 期望失敗，服務器無法滿足 Expect 請求標頭中的期望
export const HTTP_I_AM_A_TEAPOT = 418; // 我是茶壺，伺服器是一個茶壺，無法執行咖啡壺操作（笑）
export const HTTP_MISDIRECTED_REQUEST = 421; // 請求錯誤導向，請求被伺服器錯誤導向
export const HTTP_UNPROCESSABLE_ENTITY = 422; // 不能處理的實體，請求格式正確，但伺服器無法處理
export const HTTP_LOCKED = 423; // 已鎖定，資源被鎖定，當前操作無法執行
export const HTTP_FAILED_DEPENDENCY = 424; // 依賴失敗，前一個請求失敗，導致當前請求失敗
export const HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = 425; // 保留，用於未來擴展
export const HTTP_UPGRADE_REQUIRED = 426; // 需要升級，請求要求使用更高版本協議
export const HTTP_PRECONDITION_REQUIRED = 428; // 需要前提條件，請求缺少必需的前提條件
export const HTTP_TOO_MANY_REQUESTS = 429; // 請求過多，用戶請求頻率過高
export const HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431; // 請求標頭字段過大，請求標頭大小超過伺服器限制
export const HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451; // 因法律原因不可用，資源因法律原因無法訪問

// 5xx 伺服器錯誤
export const HTTP_INTERNAL_SERVER_ERROR = 500; // 伺服器內部錯誤，伺服器遇到錯誤，無法完成請求
export const HTTP_NOT_IMPLEMENTED = 501; // 未實現，伺服器不支援請求的功能
export const HTTP_BAD_GATEWAY = 502; // 閘道錯誤，作為閘道的伺服器，在獲取處理請求所需的回應時，得到無效回應
export const HTTP_SERVICE_UNAVAILABLE = 503; // 服務不可用，伺服器暫時過載或維護
export const HTTP_GATEWAY_TIMEOUT = 504; // 閘道超時，伺服器作為閘道器時無法及時得到回應
export const HTTP_VERSION_NOT_SUPPORTED = 505; // 不支援的 HTTP 版本，伺服器不支援請求使用的 HTTP 版本
export const HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506; // 變體也進行協商，伺服器充當網關或代理，執行變體內容協商
export const HTTP_INSUFFICIENT_STORAGE = 507; // 儲存空間不足，伺服器無法處理請求，因為儲存空間已滿
export const HTTP_LOOP_DETECTED = 508; // 檢測到迴圈，伺服器檢測到無限迴圈
export const HTTP_NOT_EXTENDED = 510; // 不擴展，伺服器需要網路擴展（RFC 2774）
export const HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511; // 需要網路身份驗證，用戶需要進行網路驗證才能訪問資源
