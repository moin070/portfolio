.project-section img:hover {
  transform: scale(1.05);
}


.project-card {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 1px solid rgba(79, 70, 229, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--accent);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  background: #0f172a;
}

.project-card h3 {
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem;
  color: var(--accent-light);
}

.project-card p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  flex: 1;
}

.project-img {
  border-radius: var(--card-radius);
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: var(--transition);
  transform-origin: center;
}

.project-img:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}


