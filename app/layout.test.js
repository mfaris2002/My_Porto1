import { metadata } from './layout';

describe('RootLayout Metadata', () => {
  it('should have a title property that is a non-empty string', () => {
    expect(metadata).toHaveProperty('title');
    expect(typeof metadata.title).toBe('string');
    expect(metadata.title.length).toBeGreaterThan(0);
  });

  it('should have the correct title', () => {
    expect(metadata.title).toBe('Portfolio of Faris - Software Developer');
  });

  it('should have a description property that is a non-empty string', () => {
    expect(metadata).toHaveProperty('description');
    expect(typeof metadata.description).toBe('string');
    expect(metadata.description.length).toBeGreaterThan(0);
  });

  it('should have the correct description', () => {
    expect(metadata.description).toBe(
      'This is the portfolio of Muhamad Faris Rafi. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.'
    );
  });

  it('should only contain expected properties', () => {
    const metadataKeys = Object.keys(metadata);
    expect(metadataKeys).toEqual(['title', 'description']);
  });
});