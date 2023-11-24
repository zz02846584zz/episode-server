import { DataSource } from 'typeorm';
export declare class TempDataSource extends DataSource {
    /**
     * 重新构造元数据
     */
    buildMetadatas(): Promise<void>;
}
