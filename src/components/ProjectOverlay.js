import React from 'react';
import PropTypes from 'prop-types';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();
  const dispatch = useDispatch()
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li key={project.projectId}>
              <div
                data-testid="project-overlay-action"
                onClick={() => {
                  setProject(project.projectId);
                  dispatch(setShowProjectOverlay(false));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    dispatch(setProject(project.projectId));
                    dispatch(setShowProjectOverlay(false));
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};