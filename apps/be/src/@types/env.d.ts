declare namespace NodeJS {
  interface ProcessEnv {
    /** `DB` 호스트 */
    readonly DATABASE_HOST: string;
    /** `DB` 포트 */
    readonly DATABASE_PORT: string;
    /** `DB` 유저 */
    readonly DATABASE_USER: string;
    /** `DB` 패스워드 */
    readonly DATABASE_PASSWORD: string;
    /** `DB` 이름 */
    readonly DATABASE_NAME: string;
    /** `DB` 스키마 */
    readonly DATABASE_SCHEMA: string;
    /** DB 연결 주소 */
    readonly DATABASE_URL: string;
  }
}
