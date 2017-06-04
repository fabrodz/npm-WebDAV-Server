import { IResource } from '../IResource';
import { ResourceTesterOptions, ResourceTesterProducer, ResourceTesterTestCallback } from './resourceTester/Types';
import * as actions from './resourceTester/Actions';
import * as children from './resourceTester/Children';
import * as content from './resourceTester/Content';
import * as locks from './resourceTester/Locks';
import * as properties from './resourceTester/Properties';
import * as stdMetaData from './resourceTester/StdMetaData';
export declare class ResourceTester<T extends IResource> {
    options: ResourceTesterOptions;
    producer: ResourceTesterProducer<T>;
    protected static uuid: number;
    constructor(options: ResourceTesterOptions, producer: ResourceTesterProducer<T>);
    protected uuid(): number;
    protected multiple(callback: ResourceTesterTestCallback, nb: number): ResourceTesterTestCallback;
    run(callback: (results: any) => void): void;
    protected create: typeof actions.create;
    protected delete: typeof actions.deleteResource;
    protected moveTo: typeof actions.moveTo;
    protected rename: typeof actions.rename;
    protected writeRead: typeof content.writeRead;
    protected mimeType: typeof content.mimeType;
    protected size: typeof content.size;
    protected getLocks: typeof locks.getLocks;
    protected setLock: typeof locks.setLock;
    protected removeLock: typeof locks.removeLock;
    protected getAvailableLocks: typeof locks.getAvailableLocks;
    protected getLock: typeof locks.getLock;
    protected addChild: typeof children.addChild;
    protected removeChild: typeof children.removeChild;
    protected getChildren: typeof children.getChildren;
    protected setProperty: typeof properties.setProperty;
    protected removeProperty: typeof properties.removeProperty;
    protected getProperties: typeof properties.getProperties;
    protected creationDate: typeof stdMetaData.creationDate;
    protected lastModifiedDate: typeof stdMetaData.lastModifiedDate;
    protected webName: typeof stdMetaData.webName;
    protected type: typeof stdMetaData.type;
}