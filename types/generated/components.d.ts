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
    displayName: 'StepType';
    icon: 'stack';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['READ', 'WATCH', 'PRACTICE', 'TEST']> &
      Attribute.Required &
      Attribute.DefaultTo<'READ'>;
  };
}

export interface ContentComponentsHtml extends Schema.Component {
  collectionName: 'components_content_components_htmls';
  info: {
    displayName: 'Html';
    icon: 'file';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface ContentComponentsPicture extends Schema.Component {
  collectionName: 'components_content_components_pictures';
  info: {
    displayName: 'Picture';
    icon: 'picture';
  };
  attributes: {
    content: Attribute.String;
    media: Attribute.Media;
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

export interface ContentComponentsTitle extends Schema.Component {
  collectionName: 'components_content_components_titles';
  info: {
    displayName: 'Title';
    icon: 'filter';
  };
  attributes: {
    content: Attribute.String;
    level: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
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

export interface ContentComponentsWord extends Schema.Component {
  collectionName: 'components_content_components_words';
  info: {
    displayName: 'Word';
    icon: 'filter';
  };
  attributes: {
    word: Attribute.Relation<
      'content-components.word',
      'oneToOne',
      'api::word.word'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common-enums.release-status': CommonEnumsReleaseStatus;
      'common-enums.step-types': CommonEnumsStepTypes;
      'content-components.html': ContentComponentsHtml;
      'content-components.picture': ContentComponentsPicture;
      'content-components.text': ContentComponentsText;
      'content-components.title': ContentComponentsTitle;
      'content-components.video': ContentComponentsVideo;
      'content-components.word': ContentComponentsWord;
    }
  }
}
