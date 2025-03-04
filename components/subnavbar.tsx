import React, { useState } from 'react';
import styles from '../assets/stylesheets/navbar.module.css';
import filterOptions from '/Users/makrammakram/Desktop/Saucedd/src/data/options';
import { useRouter } from 'next/router';

const SubNavbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const handleAddCandidates = () => {
    router.push('/addjob');
  };

  return (
    <div className={styles.candidatesHeader}>
      <div className={styles.headerTitle}>
        <h1>All candidates</h1>
        <button className={styles.addButton} onClick={handleAddCandidates}>+ Add candidates</button>
      </div>
      <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search all candidates using keywords"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
        <select className={styles.filterDropdown} name="job">
          <option value="">Job</option>
          {filterOptions.jobs.map((job, index) => (
            <option key={index} value={job}>
              {job}
            </option>
          ))}
        </select>
        <select className={styles.filterDropdown} name="stage">
          <option value="">Stage</option>
          {filterOptions.stages.map((stage, index) => (
            <option key={index} value={stage}>
              {stage}
            </option>
          ))}
        </select>
        <select className={styles.filterDropdown} name="tags">
          <option value="">Tags</option>
          {filterOptions.tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SubNavbar;