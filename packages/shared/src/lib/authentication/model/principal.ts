import { ApId } from '../../common/id-generator'
import { ProjectId } from '../../project/project'
import { PlatformRole, PrincipalType } from './principal-type'

export type Principal = {
    id: ApId
    type: PrincipalType
    projectId: ProjectId
    platform: {
        id: ApId
        role: PlatformRole
    }
}
