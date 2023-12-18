import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonEnumsReleaseStatus extends Schema.Component {
  collectionName: 'components_common_enums_release_statuses';
  info: {
    displayName: 'ReleaseStatus';
    icon: 'stack';
  };
  attributes: {
    status: Attribute.Enumeration<['RELEASE', 'DRAFT', 'DEVELOP']> &
      Attribute.Required &
      Attribute.DefaultTo<'DEVELOP'>;
  };
}

export interface CommonEnumsStepTypes extends Schema.Component {
  collectionName: 'components_common_enums_step_types';
  info: {
    displayName: 'StepTypes';
    icon: 'stack';
  };
  attributes: {
    type: Attribute.Enumeration<['READ', 'WATCH', 'PRACTICE', 'TEST']> &
      Attribute.Required &
      Attribute.DefaultTo<'READ'>;
  };
}

export interface ContentComponentsText extends Schema.Component {
  collectionName: 'components_content_components_texts';
  info: {
    displayName: 'Text';
    icon: 'filter';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ContentComponentsVideo extends Schema.Component {
  collectionName: 'components_content_components_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common-enums.release-status': CommonEnumsReleaseStatus;
      'common-enums.step-types': CommonEnumsStepTypes;
      'content-components.text': ContentComponentsText;
      'content-components.video': ContentComponentsVideo;
    }
  }
}
